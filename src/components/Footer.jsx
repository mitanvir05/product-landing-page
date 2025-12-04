import React from "react";

export default function Footer() {
  return (
    <footer className="mt-20 bg-slate-900 text-white py-12">
      <div className="container flex justify-between px-6 gap-6">
        <div>
          <div className="font-bold text-lg">Skyland Products</div>
          <div className="text-sm text-slate-400 mt-2">Design-first productization studio.</div>
        </div>

        <div>
          <div className="font-medium">Contact</div>
          <div className="text-sm text-slate-400 mt-2">info@skylandweb.com</div>
          <div className="text-sm text-slate-400">Tel: +13478151556</div>
        </div>
      </div>

      <div className="mt-8 text-center text-xs text-slate-500">© {new Date().getFullYear()} Skyland Web — All rights reserved</div>
    </footer>
  );
}