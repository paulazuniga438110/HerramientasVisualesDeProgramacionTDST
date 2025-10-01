import { useState } from "react";

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone: string;
}

export const useContacts = (initial: Contact[] = []) => {
  const [contacts, setContacts] = useState<Contact[]>(initial);

  const addContact = (contact: Omit<Contact, "id">) => {
    const newContact: Contact = {
      id: String(Date.now()),
      ...contact,
    };
    setContacts((c) => [newContact, ...c]);
  };

  const removeContact = (id: string) => {
    setContacts((c) => c.filter((ct) => ct.id !== id));
  };

  const updateContact = (id: string, updated: Partial<Omit<Contact, "id">>) => {
    setContacts((c) => c.map((ct) => (ct.id === id ? { ...ct, ...updated } : ct)));
  };

  return {
    contacts,
    addContact,
    removeContact,
    updateContact,
  };
};
