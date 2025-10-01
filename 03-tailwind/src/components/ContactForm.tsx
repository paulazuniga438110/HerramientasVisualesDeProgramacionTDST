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
    <form onSubmit={handleSubmit} className="p-3 border rounded space-y-3">
      <div>
        <label className="block text-sm">Nombre</label>
        <input value={name} onChange={(e) => setName(e.target.value)} className="w-full px-3 py-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm">Email</label>
        <input value={email} onChange={(e) => setEmail(e.target.value)} className="w-full px-3 py-2 border rounded" />
      </div>

      <div>
        <label className="block text-sm">Teléfono</label>
        <input value={phone} onChange={(e) => setPhone(e.target.value)} className="w-full px-3 py-2 border rounded" />
      </div>

      <div className="flex gap-2">
        <button type="submit" className="bg-green-500 px-4 py-2 rounded text-white">
          {initialData ? "Guardar" : "Agregar"}
        </button>
        {onCancel && (
          <button type="button" onClick={onCancel} className="bg-gray-300 px-4 py-2 rounded">
            Cancelar
          </button>
        )}
      </div>
    </form>
  );
};
