import type{ Contact } from "../hooks/useContacts";

interface Props {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onEdit: (contact: Contact) => void;
}

export const ContactList = ({ contacts, onDelete, onEdit }: Props) => {
  if (contacts.length === 0) {
    return <div className="p-3 text-gray-500">No hay contactos aún.</div>;
  }

  return (
    <div className="space-y-2">
      {contacts.map((c) => (
        <div key={c.id} className="p-3 border rounded flex justify-between items-center">
          <div>
            <div className="font-semibold">{c.name}</div>
            <div className="text-sm text-gray-600">{c.email}</div>
            <div className="text-sm text-gray-600">{c.phone}</div>
          </div>

          <div className="flex gap-2">
            <button onClick={() => onEdit(c)} className="px-3 py-1 rounded bg-blue-600 text-white">
              Editar
            </button>
            <button onClick={() => onDelete(c.id)} className="px-3 py-1 rounded bg-red-500 text-white">
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};
