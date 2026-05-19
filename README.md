# IoT & MQTT — Materi Presentasi

Deck presentasi interaktif tentang IoT dan protokol MQTT untuk web developer. Cocok buat workshop, kelas, atau seminar 60-90 menit.

## 🎯 Cakupan Materi

17 slide yang ngebahas:

1. **Cover** — Pengenalan tema
2. **Why** — Kenapa web dev harus paham IoT
3. **Problem** — Kenapa HTTP polling nggak cukup
4. **Konsep MQTT** — Definisi & history
5. **Arsitektur Pub/Sub** — Diagram publisher → broker → subscriber
6. **Topic** — Hierarki, wildcard `+` dan `#`
7. **QoS** — Quality of Service level 0, 1, 2
8. **Fitur Penting** — Retained, Last Will, Keep Alive, Clean Session
9. **Stack & Tools** — Mosquitto, HiveMQ, MQTT.js, MQTT Explorer, Node-RED
10. **Code Publisher** — Node.js example
11. **Code Subscriber** — Browser via WebSocket
12. **End-to-End Flow** — Sensor → broker → web → device
13. **Security** — TLS, auth, ACL, certificate
14. **Use Cases** — Smart home, industri, farming, telemetry, energy, healthcare
15. **Common Mistakes** — Pitfall yang sering kena
16. **Next Steps** — Roadmap belajar
17. **Closing**

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
