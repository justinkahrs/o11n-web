import { Suspense } from "react";
import DownloadClient from "./DownloadClient";
export default function DownloadPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DownloadClient />
    </Suspense>
  );
}