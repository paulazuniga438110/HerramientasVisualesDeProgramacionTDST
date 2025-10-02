import type { Contact } from "../hooks/useContacts";

interface Props {
  contacts: Contact[];
  onDelete: (id: string) => void;
  onEdit: (contact: Contact) => void;
}

export const ContactList = ({ contacts, onDelete, onEdit }: Props) => {
  if (contacts.length === 0) {
    return (
      <div className="p-4 text-gray-500 italic bg-gray-50 rounded-lg border border-gray-200">
        No hay contactos aún.
      </div>
    );
  }

  return (
    <div className="space-y-3">
      {contacts.map((c) => (
        <div
          key={c.id}
          className="p-4 bg-white shadow-sm rounded-xl border border-gray-200 flex justify-between items-center hover:shadow-md transition"
        >
          <div>
            <div className="font-semibold text-gray-800">{c.name}</div>
            <div className="text-sm text-gray-600">{c.email}</div>
            <div className="text-sm text-gray-600">{c.phone}</div>
          </div>

          <div className="flex gap-2">
            <button
              onClick={() => onEdit(c)}
              className="px-3 py-1 rounded-md bg-blue-500 text-white text-sm font-medium hover:bg-blue-600 transition"
            >
              Editar
            </button>
            <button
              onClick={() => onDelete(c.id)}
              className="px-3 py-1 rounded-md bg-red-500 text-white text-sm font-medium hover:bg-red-600 transition"
            >
              Eliminar
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

