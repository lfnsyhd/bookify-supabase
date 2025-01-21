"use client"

import { useGeneralStore } from "../stores/general";
import LendingForm from "./LendingForm";

export default function LendingOverlay() {
  let { isLendingOpen } = useGeneralStore();

  return isLendingOpen && (<LendingForm />);
}