import { useState } from "react";
import { Counter } from "./components/Counter";
import { TaskList } from "./components/TaskList";
import { useContacts } from "./hooks/useContacts";
import type { Contact } from "./hooks/useContacts";  
import { ContactForm } from "./components/ContactForm";
import { ContactList } from "./components/ContactList";


export const App = () => {
  const initialContacts: Contact[] = [
    { id: "c1", name: "Ana Pérez", email: "ana@example.com", phone: "3001112222" },
    { id: "c2", name: "Luis Gómez", email: "luis@example.com", phone: "3003334444" },
  ];

  const { contacts, addContact, removeContact, updateContact } = useContacts(initialContacts);
  const [editing, setEditing] = useState<Contact | null>(null);

  return (
    <div className="p-6 space-y-6 max-w-4xl mx-auto">
      <h1 className="text-2xl font-bold">Ejercicios guía 4 - Custom Hooks y Props</h1>

      <section>
        <Counter />
      </section>

      <section>
        <TaskList />
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <h2 className="text-lg font-semibold mb-2">{editing ? "Editar contacto" : "Agregar contacto"}</h2>
          <ContactForm
            initialData={editing ?? undefined}
            onCancel={() => setEditing(null)}
            onSubmit={(data) => {
              if ("id" in data) {
                updateContact(data.id, data);
                setEditing(null);
              } else {
                addContact(data);
              }
            }}
          />
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Lista de contactos</h2>
          <ContactList
            contacts={contacts}
            onDelete={removeContact}
            onEdit={setEditing}
          />
        </div>
      </section>
    </div>
  );
};



export default App
