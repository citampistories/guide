const dbNpc = {
    id: "npc",
    name: "NPC",
    icon: "<img src='https://i.ibb.co.com/BHzF2GRg/IMG-20260618-203811.jpg' alt='NPC'>",
    tag: "Karakter",
    entries: [
        {
            id: "isma",
            name: "Isma",
            icon: "<img src='https://i.ibb.co.com/BHzF2GRg/IMG-20260618-203811.jpg' alt='Isma' style='width:100%;height:100%;object-fit:cover;border-radius:inherit;'>",
            image: "https://i.ibb.co.com/BHzF2GRg/IMG-20260618-203811.jpg",
            sub: "Kasir Indomarket",
            searchTerms: ["npc", "isma nur annisa"],
            detail: {
                banner: { name: "Isma", role: "Kasir Indomarket" },
                sections: [
                    {
                        title: "Informasi Dasar",
                        rows: [
                            { label: "Nama", value: "Isma Nur Annisa" },
                            { label: "Ultah", value: "6 September" },
                            { label: "Pekerjaan", value: "Kasir Indomarket" },
                            { label: "Hobi", value: "Nonton drama korea & Membaca" }
                        ]
                    },
                    {
                        title: "Barang Spesial",
                        type: "item-tags",
                        color: "heart",
                        items: ["parfum"]
                    },
                    {
                        title: "Barang Favorit",
                        type: "item-tags",
                        items: ["parfum"]
                    },
                    {
                        title: "Hint Event Hati",
                        type: "steps",
                        steps: [
                            "1 Hati: Pergilah ke Area 3 pada hari Selasa, Kamis, atau Sabtu pagi.",
                            "2 Hati: Pergilah ke Area 1 pada hari Selasa, Kamis, atau Sabtu siang.",
                            "3 Hati: Pergilah ke Minimarket pada hari Selasa, Kamis, atau Sabtu sore.",
                            "4 Hati: Pergilah ke Area 2 pada hari Senin, Rabu, atau Jumat pagi.",
                            "5 Hati: Pergilah ke Area 1 pada hari Senin, Rabu, atau Jumat siang.",
                            "6 Hati: Pergilah ke Minimarket pada hari Senin, Rabu, atau Jumat sore.",
                            "7 Hati: Pergilah ke Area 3 pada hari Minggu pagi.",
                            "8 Hati: Pergilah ke Area 1 pada hari Minggu siang.",
                            "9 Hati: Pergilah ke Minimarket pada hari Minggu sore.",
                            "10 Hati: Pergilah ke Area 3 pada hari cerah untuk langkah terakhir."
                        ]
                    }
                ]
            }
        }
    ]
};
