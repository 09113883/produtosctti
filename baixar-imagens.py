"""Baixa as imagens do catálogo (Unsplash) para a pasta assets/img.
Execute uma vez, com internet:  python baixar-imagens.py
Depois disso o site passa a usar as cópias locais."""
import os, urllib.request

PASTA = os.path.join(os.path.dirname(os.path.abspath(__file__)), "assets", "img")
os.makedirs(PASTA, exist_ok=True)

IMAGENS = {
    "negocios.jpg": "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1100&q=85",
    "evolui.jpg": "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=85",
    "impulso.jpg": "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=900&q=85",
    "descoberta.jpg": "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=900&q=85",
    "jovem.jpg": "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=900&q=85",
    "inova.jpg": "https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?auto=format&fit=crop&w=1100&q=85",
}

for nome, url in IMAGENS.items():
    destino = os.path.join(PASTA, nome)
    try:
        req = urllib.request.Request(url, headers={"User-Agent": "Mozilla/5.0"})
        with urllib.request.urlopen(req, timeout=30) as r, open(destino, "wb") as f:
            f.write(r.read())
        print("ok   ", nome)
    except Exception as e:
        print("ERRO ", nome, e)
