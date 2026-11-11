import { useState } from "react";
import { clsx } from "clsx";
import {
  LoaderCircle,
  Plus,
  EyeOff,
  Eye,
  Lock,
  LockOpen,
  CreditCard,
} from "lucide-react";
import { toast } from "sonner";
import { Button } from "../../components/ui/button";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
} from "../../components/ui/dialog";
import { Input } from "../../components/ui/input";
import { Label } from "../../components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "../../components/ui/select";
import { useData } from "../../hooks/useData";
const MaskedDigits = () => (
  <div className="flex gap-1">
    {[0, 1, 2, 3].map((item) => (
      <span key={item} className="w-2 h-2 rounded-full bg-white/50" />
    ))}
  </div>
);
export const Cards = () => {
  const {
    cards: cards,
    loading: loading,
    addCard: addCard,
    freezeCard: freezeCard,
  } = useData();
  const [revealed, setRevealed] = useState({});
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [creating, setCreating] = useState(false);
  const [holderName, setHolderName] = useState("");
  const [cardType, setCardType] = useState("physical");
  const [cardBrand, setCardBrand] = useState("visa");
  const toggleReveal = (cardId) => {
    setRevealed((prev) => ({ ...prev, [cardId]: !prev[cardId] }));
  };
  const handleCreateCard = async (event) => {
    if ((event.preventDefault(), !holderName)) {
      toast.error("Please enter card holder name");
      return;
    }
    setCreating(true);
    const newCard = {
      brand: cardBrand,
      type: cardType,
      status: "active",
      holder: holderName,
      color:
        cardBrand === "visa"
          ? "bg-gradient-to-br from-indigo-600 to-purple-700"
          : "bg-gradient-to-br from-emerald-500 to-teal-700",
      last4: Math.floor(1e3 + Math.random() * 9e3).toString(),
    };
    const success = await addCard(newCard);
    setCreating(false);
    if (success) {
      toast.success("Card created successfully!");
      setIsDialogOpen(false);
      setHolderName("");
    } else {
      toast.error("Failed to create card");
    }
  };
  return loading ? (
    <div className="flex items-center justify-center min-h-[60vh]">
      <LoaderCircle className="w-8 h-8 animate-spin text-indigo-600" />
    </div>
  ) : (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">My Cards</h1>
          <p className="text-gray-500">
            Manage your physical and virtual cards
          </p>
        </div>
        <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
          <DialogTrigger asChild={true}>
            <Button className="bg-indigo-600 hover:bg-indigo-700 text-white">
              <Plus className="w-4 h-4 mr-2" />
              Add New Card
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-[425px]">
            <DialogHeader>
              <DialogTitle>Add New Card</DialogTitle>
              <DialogDescription>
                Create a new virtual or request a physical card.
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleCreateCard}>
              <div className="grid gap-4 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="holder" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="holder"
                    value={holderName}
                    onChange={(event) => setHolderName(event.target.value)}
                    className="col-span-3"
                    placeholder="Card Holder Name"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="type" className="text-right">
                    Type
                  </Label>
                  <Select value={cardType} onValueChange={setCardType}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select type" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="physical">Physical</SelectItem>
                      <SelectItem value="virtual">Virtual</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="brand" className="text-right">
                    Brand
                  </Label>
                  <Select value={cardBrand} onValueChange={setCardBrand}>
                    <SelectTrigger className="col-span-3">
                      <SelectValue placeholder="Select brand" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="visa">Visa</SelectItem>
                      <SelectItem value="mastercard">Mastercard</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <DialogFooter>
                <Button type="submit" disabled={creating}>
                  {creating ? (
                    <LoaderCircle className="w-4 h-4 animate-spin mr-2" />
                  ) : null}
                  Create Card
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {cards.map((card) => {
          var color;
          return (
            <div
              key={card.id}
              className="group relative bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-all"
            >
              <div
                className={clsx(
                  "h-48 p-6 flex flex-col justify-between text-white relative overflow-hidden",
                  (color = card.color) != null && color.startsWith("from-")
                    ? `bg-gradient-to-br ${card.color}`
                    : card.color || "bg-gray-800",
                )}
              >
                <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-white/10 rounded-full blur-2xl" />
                <div className="absolute bottom-0 left-0 -mb-10 -ml-10 w-40 h-40 bg-black/10 rounded-full blur-2xl" />
                <div className="flex justify-between items-start z-10">
                  <div className="flex flex-col">
                    <span className="text-xs font-medium uppercase tracking-wider opacity-80">
                      Current Balance
                    </span>
                    <span className="text-2xl font-bold mt-1">
                      ${(card.balance || 0).toLocaleString()}
                    </span>
                  </div>
                  <div className="w-12 h-8 bg-white/20 rounded flex items-center justify-center backdrop-blur-sm">
                    <span className="font-bold text-xs uppercase">
                      {card.brand || card.type}
                    </span>
                  </div>
                </div>
                <div className="space-y-4 z-10">
                  <div className="flex items-center gap-4">
                    <MaskedDigits />
                    <MaskedDigits />
                    <MaskedDigits />
                    <span className="font-mono text-lg tracking-widest">
                      {card.last4}
                    </span>
                  </div>
                  <div className="flex justify-between items-end">
                    <div>
                      <span className="text-xs uppercase opacity-70 block mb-1">
                        Card Holder
                      </span>
                      <span className="font-medium tracking-wide text-sm">
                        {card.holder?.toUpperCase()}
                      </span>
                    </div>
                    <div>
                      <span className="text-xs uppercase opacity-70 block mb-1">
                        Expires
                      </span>
                      <span className="font-medium tracking-wide text-sm">
                        {card.expiry}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="p-4 bg-gray-50 flex justify-between items-center gap-2">
                <button
                  onClick={() => toggleReveal(card.id)}
                  className="flex-1 flex items-center justify-center gap-2 py-2 px-3 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
                >
                  {revealed[card.id] ? (
                    <>
                      <EyeOff className="w-4 h-4" /> Hide
                    </>
                  ) : (
                    <>
                      <Eye className="w-4 h-4" /> Details
                    </>
                  )}
                </button>
                <button
                  onClick={async () => {
                    if (await freezeCard(card.id)) {
                      toast.success(
                        card.status === "active"
                          ? "Card frozen"
                          : "Card unfrozen",
                      );
                    }
                  }}
                  className={clsx(
                    "flex-1 flex items-center justify-center gap-2 py-2 px-3 border rounded-lg text-sm font-medium transition-colors",
                    card.status === "active"
                      ? "bg-white border-gray-200 text-gray-700 hover:bg-gray-100 hover:text-red-600 hover:border-red-200"
                      : "bg-red-50 border-red-200 text-red-600 hover:bg-red-100",
                  )}
                >
                  {card.status === "active" ? (
                    <>
                      <Lock className="w-4 h-4" /> Freeze
                    </>
                  ) : (
                    <>
                      <LockOpen className="w-4 h-4" /> Unfreeze
                    </>
                  )}
                </button>
              </div>
              {revealed[card.id] && (
                <div className="px-6 pb-6 pt-2 bg-gray-50 border-t border-gray-100 animate-in slide-in-from-top-2 fade-in duration-200">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-medium mb-1">
                        Card Number
                      </p>
                      <p className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded border border-gray-200 select-all">
                        4242 4242 4242 {card.last4}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-gray-500 uppercase font-medium mb-1">
                        CVV
                      </p>
                      <p className="text-sm font-mono text-gray-900 bg-white px-2 py-1 rounded border border-gray-200 w-12 text-center select-all">
                        ***
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>
          );
        })}
        {cards.length === 0 && (
          <div className="col-span-full flex flex-col items-center justify-center py-12 text-gray-500">
            <CreditCard className="w-12 h-12 mb-4 text-gray-300" />
            <p className="text-lg font-medium">No cards found</p>
            <p className="text-sm">Create a new card to get started</p>
          </div>
        )}
      </div>
    </div>
  );
};
