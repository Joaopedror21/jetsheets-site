# JetApps — site local

Site estático criado somente nesta pasta. Não requer framework, instalação de pacotes, conta ou banco de dados. O botão principal baixa `downloads/JetSheets-Installer-windows-x86_64.exe` da própria pasta do site.

## Visualizar localmente

Abra `index.html` no navegador ou, para simular uma hospedagem estática:

```powershell
cd jetsheets-site
python -m http.server 8080
```

Depois acesse `http://localhost:8080`. Para publicar em uma hospedagem sua, envie **todo o conteúdo** desta pasta, inclusive `downloads/`. Nenhum arquivo do site foi enviado ao GitHub.

## Adicionar futuros programas

Edite a lista em `site-data.js`. Cada entrada tem `name`, `status`, `description` e `href`. Deixe `href` vazio enquanto o programa não tiver página; quando estiver pronto, preencha com um endereço HTTPS ou caminho do próprio site. Os cartões aparecem na seção **A família JetApps**. Também existe uma versão estática dos cartões em `index.html` para visitantes com JavaScript desativado; atualize esse trecho se mudar o catálogo.

## Atualizar o instalador oferecido pelo site

1. Substitua `downloads/JetSheets-Installer-windows-x86_64.exe` pela nova versão publicada.
2. Calcule o SHA-256 com `Get-FileHash downloads/JetSheets-Installer-windows-x86_64.exe -Algorithm SHA256`.
3. Atualize número da versão, tamanho e SHA-256 em `index.html` e revise as funcionalidades descritas.

O site é estático: ele não troca o `.exe` automaticamente quando uma nova Release aparece. O instalador já instalado consulta atualizações pelo botão **Buscar atualizações**.
