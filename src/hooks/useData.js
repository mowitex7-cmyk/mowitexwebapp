import { useState, useCallback, useEffect } from "react";
const STORAGE_KEY = "mowitex-preview-data";
const DAY = 864e5;
const createInitialData = () => ({
  balance: 24562,
  transactions: [
    {
      id: "tx_1",
      amount: -12.5,
      description: "Starbucks",
      category: "food",
      date: new Date(Date.now() - DAY).toISOString(),
      type: "expense",
      status: "completed",
    },
    {
      id: "tx_2",
      amount: 5e3,
      description: "Salary",
      category: "income",
      date: new Date(Date.now() - 2 * DAY).toISOString(),
      type: "income",
      status: "completed",
    },
    {
      id: "tx_3",
      amount: -120,
      description: "Grocery Store",
      category: "shopping",
      date: new Date(Date.now() - 3 * DAY).toISOString(),
      type: "expense",
      status: "completed",
    },
    {
      id: "tx_4",
      amount: -15,
      description: "Netflix",
      category: "subscription",
      date: new Date(Date.now() - 4 * DAY).toISOString(),
      type: "expense",
      status: "completed",
    },
  ],
  cards: [
    {
      id: "card_default",
      type: "Visa",
      last4: "4242",
      expiry: "12/28",
      holder: "My Card",
      balance: 5e3,
      status: "active",
      color: "from-indigo-600 to-purple-700",
    },
  ],
});
let cache = null;
const loadData = () => {
  if (cache) return cache;
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    cache = stored ? JSON.parse(stored) : createInitialData();
  } catch {
    cache = createInitialData();
  }
  return cache;
};
const saveData = (data) => {
  cache = data;
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
  } catch {}
};
export const useData = () => {
  const [data, setData] = useState(loadData);
  const [loading, setLoading] = useState(true);
  const refresh = useCallback(async () => {
    setData({ ...loadData() });
    setLoading(false);
  }, []);
  useEffect(() => {
    refresh();
  }, [refresh]);
  const update = (mutate) => {
    const next = mutate(structuredClone(loadData()));
    return next ? (saveData(next), setData({ ...next }), true) : false;
  };
  const addTransaction = async (input) => {
    const {
      amount: amount,
      description: description,
      category: category,
      type: type,
      ...rest
    } = input;
    const value = parseFloat(amount);
    return !value || !description
      ? false
      : update((draft) => {
          const isDebit = type === "expense" || type === "transfer";
          return isDebit && draft.balance < value
            ? false
            : ((draft.balance += isDebit ? -value : value),
              draft.transactions.unshift({
                id: `tx_${Date.now()}`,
                amount: isDebit ? -value : value,
                description: description,
                category: category,
                date: new Date().toISOString(),
                type: type,
                status: "completed",
                ...rest,
              }),
              draft);
        });
  };
  const addCard = async (card) =>
    update((draft) => {
      draft.cards.push({
        ...card,
        id: `card_${Date.now()}`,
        balance: 0,
        expiry: "12/29",
        status: "active",
      });
      return draft;
    });
  const updateTransaction = async (id, changes) =>
    update((draft) => {
      const index = draft.transactions.findIndex(
        (transaction) => transaction.id === id,
      );
      return index < 0
        ? false
        : (changes.amount !== undefined &&
            (draft.balance +=
              changes.amount - draft.transactions[index].amount),
          (draft.transactions[index] = {
            ...draft.transactions[index],
            ...changes,
          }),
          draft);
    });
  const fundCard = async (cardId, amount) =>
    update((draft) => {
      const targetCard = draft.cards.find((card) => card.id === cardId);
      return !targetCard || amount <= 0 || draft.balance < amount
        ? false
        : ((targetCard.balance += amount),
          (draft.balance -= amount),
          draft.transactions.unshift({
            id: `tx_${Date.now()}`,
            amount: -amount,
            description: "Card Top Up",
            category: "transfer",
            date: new Date().toISOString(),
            type: "expense",
            status: "completed",
            cardId: cardId,
          }),
          draft);
    });
  const withdrawFromCard = async (cardId, amount) =>
    update((draft) => {
      const targetCard = draft.cards.find((card) => card.id === cardId);
      return !targetCard || amount <= 0 || targetCard.balance < amount
        ? false
        : ((targetCard.balance -= amount),
          (draft.balance += amount),
          draft.transactions.unshift({
            id: `tx_${Date.now()}`,
            amount: amount,
            description: "Card Withdrawal",
            category: "transfer",
            date: new Date().toISOString(),
            type: "income",
            status: "completed",
            cardId: cardId,
          }),
          draft);
    });
  const freezeCard = async (cardId) =>
    update((draft) => {
      const targetCard = draft.cards.find((card) => card.id === cardId);
      return targetCard
        ? ((targetCard.status =
            targetCard.status === "frozen" ? "active" : "frozen"),
          draft)
        : false;
    });
  const deleteCard = async (cardId) =>
    update((draft) => {
      draft.cards = draft.cards.filter((card) => card.id !== cardId);
      return draft;
    });
  return {
    balance: data.balance,
    transactions: data.transactions,
    cards: data.cards,
    loading: loading,
    refresh: refresh,
    addTransaction: addTransaction,
    addCard: addCard,
    updateTransaction: updateTransaction,
    topUpCard: fundCard,
    withdrawCard: withdrawFromCard,
    freezeCard: freezeCard,
    deleteCard: deleteCard,
  };
};
