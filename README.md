# React Dataingeniør Portefølje

Morderne, ren og profesjonell portefølje bygd med **React**, **Vite** og **Tailwind CSS**.

## Seksjonar
- **Navbar**: Responsiv meny med snøgglenkjer.
- **Hero**: Presentasjon av dataingeniør med Java kode-widget.
- **Prosjekt**: Rutenett (grid) med programmeringsprosjekt, kjeldekode og live demos.
- **Ferdigheiter**: Kategoriar for databehandling, databasar, sky/DevOps og utvikling.
- **Kontakt**: Direkte lenkjer og eit interaktivt kontaktskjema.

---

## Distribusjon til GitHub Pages (Deployment)

Applikasjonen er klargjort for publisering på **GitHub Pages**.

### Alternativ 1: Automatisk distribusjon via GitHub Actions (Anbefalt)
Ei GitHub Actions-arbeidsflyt er konfigurert i `.github/workflows/deploy.yml`.

1. Gå til repositoriet ditt på GitHub: **Settings > Pages**.
2. Under **Build and deployment > Source**, vel **GitHub Actions**.
3. Kvar gong du pusher til `main` eller `master`, vil nettsida byggjast og publiserast automatisk.

### Alternativ 2: Manuell distribusjon via command line
Du kan òg publisere manuelt ved hjelp av `gh-pages` skriptet:

```bash
cd react-portfolio
npm run deploy
```
