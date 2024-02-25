import { createContact } from "../contacts";

export async function createContactsAction() {
    const contact = await createContact();
    return { contact };
  }