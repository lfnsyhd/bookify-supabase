"use client"

import { useGeneralStore } from "../stores/general";
import BookForm from "./BookForm";

export default function BookOverlay() {
  let { isModalFormBookOpen } = useGeneralStore();

  return isModalFormBookOpen && (<BookForm />);
}