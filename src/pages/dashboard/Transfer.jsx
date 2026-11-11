import { clsx } from "clsx";
import {
  User,
  Globe,
  DollarSign,
  FileText,
  LoaderCircle,
  Send,
} from "lucide-react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router";
import { toast } from "sonner";
import { useData } from "../../hooks/useData";
export const Transfer = () => {
  const {
    register: register,
    handleSubmit: handleSubmit,
    formState: { errors: errors, isSubmitting: isSubmitting },
  } = useForm();
  const { addTransaction: addTransaction } = useData();
  const navigate = useNavigate();
  const onSubmit = async (formData) => {
    try {
      if (
        await addTransaction({
          amount: formData.amount,
          description: `Transfer to ${formData.recipientName}`,
          category: "transfer",
          type: "transfer",
          recipient: formData.recipientName,
          account: formData.accountNumber,
          currency: formData.currency,
          note: formData.note,
        })
      ) {
        toast.success("Transfer successful!");
        navigate("/dashboard/transactions");
      } else {
        toast.error("Transfer failed. Please try again.");
      }
    } catch {
      toast.error("An error occurred.");
    }
  };
  const inputClass = (hasError) =>
    clsx(
      "w-full px-4 py-2 border rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all",
      hasError ? "border-red-300 focus:ring-red-200" : "border-gray-200",
    );
  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Send Money</h1>
        <p className="text-gray-500">
          Transfer funds securely to anyone, anywhere
        </p>
      </div>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 space-y-6"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <User className="w-4 h-4 text-gray-400" />
              Recipient Name
            </label>
            <input
              {...register("recipientName", {
                required: "Recipient name is required",
              })}
              type="text"
              className={inputClass(errors.recipientName)}
              placeholder="e.g. John Doe"
            />
            {errors.recipientName && (
              <p className="text-xs text-red-500">
                {errors.recipientName.message}
              </p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <Globe className="w-4 h-4 text-gray-400" />
              Account Number / IBAN
            </label>
            <input
              {...register("accountNumber", {
                required: "Account number is required",
              })}
              type="text"
              className={inputClass(errors.accountNumber)}
              placeholder="e.g. US12 3456 7890"
            />
            {errors.accountNumber && (
              <p className="text-xs text-red-500">
                {errors.accountNumber.message}
              </p>
            )}
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
              <DollarSign className="w-4 h-4 text-gray-400" />
              Amount
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-500 font-medium">
                $
              </span>
              <input
                {...register("amount", {
                  required: "Amount is required",
                  min: { value: 1, message: "Minimum amount is $1" },
                })}
                type="number"
                step="0.01"
                className={clsx(inputClass(errors.amount), "pl-8")}
                placeholder="0.00"
              />
            </div>
            {errors.amount && (
              <p className="text-xs text-red-500">{errors.amount.message}</p>
            )}
          </div>
          <div className="space-y-2">
            <label className="text-sm font-medium text-gray-700">
              Currency
            </label>
            <select
              {...register("currency")}
              className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all bg-white"
            >
              <option value="USD">USD - US Dollar</option>
              <option value="EUR">EUR - Euro</option>
              <option value="GBP">GBP - British Pound</option>
              <option value="JPY">JPY - Japanese Yen</option>
            </select>
          </div>
        </div>
        <div className="space-y-2">
          <label className="text-sm font-medium text-gray-700 flex items-center gap-2">
            <FileText className="w-4 h-4 text-gray-400" />
            Note (Optional)
          </label>
          <textarea
            {...register("note")}
            rows={3}
            className="w-full px-4 py-2 border border-gray-200 rounded-lg outline-none focus:ring-2 focus:ring-indigo-500 transition-all resize-none"
            placeholder="What's this for?"
          />
        </div>
        <div className="pt-4">
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-indigo-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-indigo-700 transition-colors flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {isSubmitting ? (
              <LoaderCircle className="w-5 h-5 animate-spin" />
            ) : (
              <Send className="w-5 h-5" />
            )}
            {isSubmitting ? "Processing..." : "Send Money"}
          </button>
        </div>
      </form>
    </div>
  );
};
