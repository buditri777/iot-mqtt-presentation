# Laravel & MQTT — Materi Presentasi

Deck presentasi interaktif tentang IoT dengan stack **Laravel + MQTT + Reverb** untuk web developer. Cocok buat workshop, kelas, atau seminar 60-90 menit.

## 🎯 Cakupan Materi

18 slide yang ngebahas:

1. **Cover** — Laravel + MQTT untuk IoT
2. **Why** — Kenapa Laravel cocok buat backend IoT
3. **Problem** — REST polling vs MQTT pub/sub
4. **Konsep MQTT** — Definisi & history
5. **Arsitektur Pub/Sub** — Diagram ESP32 → broker → Laravel → web
6. **Topic** — Hierarki, wildcard `+` dan `#`
7. **QoS** — Quality of Service level 0, 1, 2
8. **Fitur Penting** — Retained, Last Will, Keep Alive, Clean Session
9. **Stack** — Laravel, php-mqtt/laravel-client, Mosquitto, Reverb, Echo
10. **Setup** — Composer install + config `.env` + Mosquitto
11. **Publisher** — Artisan command pakai `MQTT::connection()`
12. **Subscriber** — Long-running listener + Eloquent + broadcast
13. **Real-time Browser** — Event broadcasting via Reverb + Echo
14. **End-to-End Flow** — ESP32 → Mosquitto → Laravel → MySQL → browser
15. **Security** — TLS, auth, ACL, certificate
16. **Use Cases** — Smart farm, industri, tambak, fleet, energy, SaaS
17. **Common Mistakes** — Pitfall (Supervisor, memory leak, dll)
18. **Closing**

## 🚀 Cara Pakai

### Lokal
```bash
cd slides
python3 -m http.server 8000
# buka http://localhost:8000
```

### Deploy ke Vercel
```bash
cd slides
vercel --prod --yes
```

## ⌨️ Keyboard Shortcut

| Key | Action |
|-----|--------|
| `→` / `Space` / `PageDown` | Next slide |
| `←` / `PageUp` | Previous slide |
| `Home` | Slide pertama |
| `End` | Slide terakhir |
| `F` | Toggle fullscreen |

Mobile: swipe kiri/kanan. Click area kanan layar = next, kiri = prev.

## 🎨 Stack

- **HTML/CSS/JS** murni — no build step
- **Google Fonts**: Space Grotesk + Inter + JetBrains Mono
- **Dark theme** dengan gradient cyan→indigo→purple
- **Hash routing** (`#5` = slide 5) buat deep-link
- **Responsive** — desktop, tablet, mobile

## 📐 Customize

- Edit konten: `slides/index.html`
- Edit tampilan: `slides/style.css`
- Edit nav behavior: `slides/script.js`

## 📜 License

MIT — bebas dipakai, dimodif, dishare.
