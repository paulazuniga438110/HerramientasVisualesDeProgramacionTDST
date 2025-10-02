import { useEffect, useState } from "react";
import type { Contact } from "../hooks/useContacts";

interface Props {
  initialData?: Contact | null;
  onSubmit: (data: Omit<Contact, "id"> | Contact) => void;
  onCancel?: () => void;
}

export const ContactForm = ({ initialData = null, onSubmit, onCancel }: Props) => {
  const [name, setName] = useState(initialData?.name ?? "");
  const [email, setEmail] = useState(initialData?.email ?? "");
  const [phone, setPhone] = useState(initialData?.phone ?? "");

  useEffect(() => {
    setName(initialData?.name ?? "");
    setEmail(initialData?.email ?? "");
    setPhone(initialData?.phone ?? "");
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim() || !phone.trim()) return;
    onSubmit(
      initialData
        ? { ...initialData, name, email, phone }
        : { name, email, phone }
    );
    if (!initialData) {
      setName("");
      setEmail("");
      setPhone("");
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="p-6 bg-white shadow-md rounded-xl space-y-4"
    >
      <div>
        <label className="block text-sm font-medium text-purple-600 mb-1">
          Nombre
        </label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-purple-600 mb-1">
          Email
        </label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-purple-600 mb-1">
          Teléfono
        </label>
        <input
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"
        />
      </div>

      <div className="flex gap-3 pt-2">
        <button
          type="submit"
          className="bg-green-500 px-4 py-2 rounded-md text-white font-medium hover:bg-green-600 transition"
        >
          {initialData ? "Guardar" : "Agregar"}
        </button>
        {onCancel && (
          <button
            type="button"
            onClick={onCancel}
            className="bg-gray-300 px-4 py-2 rounded-md text-gray-800 hover:bg-gray-400 transition"
          >
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};

