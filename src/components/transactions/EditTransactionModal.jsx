import { useState, useEffect } from "react";
import { useData } from "../../hooks/useData";
import { Modal } from "../Modal";
export const EditTransactionModal = ({
  isOpen: isOpen,
  onClose: onClose,
  transaction: transaction,
}) => {
  const { updateTransaction: updateTransaction } = useData();
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [amount, setAmount] = useState("");
  const [saving, setSaving] = useState(false);
  useEffect(() => {
    if (transaction) {
      setDescription(transaction.description);
      setCategory(transaction.category);
      setAmount(transaction.amount);
    }
  }, [transaction]);
  const handleSubmit = async (event) => {
    if ((event.preventDefault(), !transaction)) return;
    setSaving(true);
    const success = await updateTransaction(transaction.id, {
      description: description,
      category: category,
      amount: Number(amount),
    });
    setSaving(false);
    if (success) {
      onClose();
    }
  };
  return transaction ? (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      title="Edit Transaction"
      className="max-w-md"
    >
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Description
          </label>
          <input
            type="text"
            id="description"
            value={description}
            onChange={(event) => setDescription(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required={true}
          />
        </div>
        <div>
          <label
            htmlFor="amount"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Amount
          </label>
          <input
            type="number"
            id="amount"
            value={amount}
            onChange={(event) => setAmount(Number(event.target.value))}
            step="0.01"
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent"
            required={true}
          />
          <p className="text-xs text-gray-500 mt-1">
            Use negative value for expenses.
          </p>
        </div>
        <div>
          <label
            htmlFor="category"
            className="block text-sm font-medium text-gray-700 mb-1"
          >
            Category
          </label>
          <select
            id="category"
            value={category}
            onChange={(event) => setCategory(event.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent bg-white"
          >
            <option value="food">{"Food & Dining"}</option>
            <option value="transport">Transport</option>
            <option value="shopping">Shopping</option>
            <option value="subscription">Subscription</option>
            <option value="transfer">Transfer</option>
            <option value="income">Income</option>
            <option value="bills">{"Bills & Utilities"}</option>
            <option value="entertainment">Entertainment</option>
            <option value="other">Other</option>
          </select>
        </div>
        <div className="pt-4 flex justify-end gap-3">
          <button
            type="button"
            onClick={onClose}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={saving}
            className="px-4 py-2 text-sm font-medium text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
          >
            {saving ? "Saving..." : "Save Changes"}
          </button>
        </div>
      </form>
    </Modal>
  ) : null;
};
