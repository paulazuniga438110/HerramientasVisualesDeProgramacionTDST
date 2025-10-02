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
    <div className="min-h-screen bg-gradient-to-br from-purple-100 to-blue-100 p-6 flex flex-col items-center">
      {/* Encabezado */}
      <header className="mb-12 text-center">
        <h1 className="text-4xl font-bold text-purple-700 mb-2">Guía 4 - React Hooks </h1>
        <p className="text-gray-700 text-lg">
          Práctica con Custom Hooks, Props y Listas Tipadas
        </p>
      </header>

      {/* Contenido */}
      <main className="w-full max-w-6xl grid gap-10">
        {/* Ejercicio 1 - Counter */}
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Ejercicio 1: Contador
          </h2>
          <Counter />
        </section>

        {/* Ejercicio 2 - Task List */}
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-4">
            Ejercicio 2: Lista de Tareas
          </h2>
          <TaskList />
        </section>

        {/* Ejercicio 3 - Contactos */}
        <section className="bg-white rounded-2xl shadow-lg p-6">
          <h2 className="text-2xl font-semibold text-blue-600 mb-6">
            Ejercicio 3: Gestor de Contactos
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            {/* Formulario */}
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-purple-700">
                {editing ? "✏️ Editar contacto" : "Agregar nuevo contacto"}
              </h3>
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

            {/* Lista de contactos */}
            <div className="bg-purple-50 p-4 rounded-xl border border-purple-200 shadow-sm">
              <h3 className="text-lg font-semibold mb-3 text-purple-700">
                Lista de Contactos
              </h3>
              <ContactList
                contacts={contacts}
                onDelete={removeContact}
                onEdit={setEditing}
              />
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="mt-12 text-gray-600 text-sm">
        Trabajo Guía 4
      </footer>
    </div>
  );
};

export default App;




