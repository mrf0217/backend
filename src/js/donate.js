document.addEventListener("DOMContentLoaded", async () => {
    const params = new URLSearchParams(window.location.search);
    const didonorId = params.get("id");

    // Fetch Didonor details
    const response = await fetch(`/api/didonor/${didonorId}`);
    const didonor = await response.json();

    // Display details
    const detailsDiv = document.getElementById("didonorDetails");
    detailsDiv.innerHTML = `
        <p><strong>Nama:</strong> ${didonor.nama}</p>
        <p><strong>Darah Sudah Diterima:</strong> ${didonor.darah_sudah_di_terima}</p>
        <p><strong>Uang yang Diterima:</strong> ${didonor.uang_yang_diterima || 0}</p>
    `;

    // Enable blood donation button only if 'darah_sudah_di_terima' is 'belum'
    const donateBtn = document.getElementById("donateBloodBtn");
    if (didonor.darah_sudah_di_terima === "belum") {
        donateBtn.disabled = false;
    }

    // Handle blood donation
    donateBtn.addEventListener("click", async () => {
        await fetch("/api/didonor/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: didonorId, darah_action: true })
        });
        alert("Blood donation marked successfully!");
        window.location.reload();
    });

    // Handle money donation
    document.getElementById("moneyForm").addEventListener("submit", async (e) => {
        e.preventDefault();
        const amount = document.getElementById("money").value;

        await fetch("/api/didonor/update", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ id: didonorId, uang_yang_diterima: amount })
        });
        alert("Money donated successfully!");
        window.location.reload();
    });
});
