# PARK AI — Official Website

PARK AI resmî web sitesi. AURA Technology bünyesindeki bu proje, AURA Snap ve Sahne Plus depolarından tamamen bağımsızdır.

## Mevcut aşama: Çok Yakında

- Mobil, tablet ve masaüstüne uyumlu **siyah / neon yeşil** lansman ekranı.
- Kurucu tarafından sağlanan orijinal **yeşil P + otomobil tarama logosu** (`apps/web/logo.webp`).
- Türkçe başlık ve açıklamalar; sahte geri sayım veya çalışmayan buton bulunmaz.
- Web favicon ve temel sosyal paylaşım açıklamaları.
- Ürün özellikleri ve kullanıcı hesapları henüz yayında değildir.

## Cloudflare Workers yayını

GitHub bağlantısından `omerleafyson/park-ai-web` reposunu ve `main` dalını seçin.

| Ayar | Değer |
|---|---|
| Root directory | `/` |
| Build command | `npm ci && npm run build` |
| Deploy command | `npx wrangler deploy` |
| Static assets | `apps/web/dist` |

`wrangler.toml` içindeki Worker adı: `park-ai-web`. Çalışan varlıklar `apps/web/build.mjs` ile `dist` klasörüne hazırlanır.

### Yerel doğrulama

```bash
npm ci
npm run build
```

Yayın tamamlandıktan sonra özel alan adını Cloudflare Worker'a **Custom Domain** olarak ekleyin. DNS/SSL bağlantısını doğrulayın. Bu depoya yapılan commit tek başına canlı yayın kanıtı değildir.
