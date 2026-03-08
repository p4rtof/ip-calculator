document.addEventListener('DOMContentLoaded', () => {
    const btnLakukan = document.getElementById('lakukanConvert');
    const btnTidak = document.getElementById('tidakConvert');
    const btnSubmit = document.getElementById('btnSubmitConvert');
    const inputJumlahConvert = document.getElementById('matkulConvert');
    const formDinamis = document.getElementById('form-dinamis-convert');
    
    const containerNilai = document.getElementById('container-nilai');
    const containerInput = document.getElementById('container-input-convert');
    const displayNilai = document.getElementById('nilai-akhir');

    // 1. Generate Dropdown Dinamis
    inputJumlahConvert.addEventListener('input', () => {
        const jumlah = parseInt(inputJumlahConvert.value) || 0;
        formDinamis.innerHTML = ''; 
        for (let i = 1; i <= jumlah; i++) {
            formDinamis.innerHTML += `
                <div class="grid grid-cols-2 gap-2 p-3 bg-white rounded-md border border-slate-200 shadow-sm">
                    <div>
                        <label class="text-[10px] font-bold text-gray-400">NILAI #${i}</label>
                        <select class="mutu-convert w-full border border-gray-300 rounded p-1 text-sm">
                            <option value="4">A</option><option value="3.5">AB</option>
                            <option value="3">B</option><option value="2.5">BC</option>
                            <option value="2">C</option><option value="1">D</option><option value="0">E</option>
                        </select>
                    </div>
                    <div>
                        <label class="text-[10px] font-bold text-gray-400">SKS #${i}</label>
                        <input type="number" class="sks-convert w-full border border-gray-300 rounded p-1 text-sm" placeholder="3">
                    </div>
                </div>`;
        }
    });

    // 2. Fungsi Hitung
    function hitungIP(isConvert) {
        const matkulIds = ['pemrog', 'oak', 'strukdat', 'metkuan', 'rpl', 'dpp', 'gkv'];
        let totalBobot = 0;
        let totalSKS = 0;
        const sksReguler = 3; 

        matkulIds.forEach(id => {
            const val = document.getElementById(id).value;
            if (val !== 'none') {
                totalBobot += (parseFloat(val) * sksReguler);
                totalSKS += sksReguler;
            }
        });

        if (isConvert) {
            const mutus = document.querySelectorAll('.mutu-convert');
            const skss = document.querySelectorAll('.sks-convert');
            mutus.forEach((sel, i) => {
                const s = parseFloat(skss[i].value) || 0;
                totalBobot += (parseFloat(sel.value) * s);
                totalSKS += s;
            });
        }

        if (totalSKS === 0) return alert('Isi nilai matkul dulu!');

        const hasil = totalBobot / totalSKS;
        displayNilai.innerText = hasil.toFixed(2);
        
        containerNilai.classList.remove('hidden');
        containerNilai.scrollIntoView({ behavior: 'smooth' });
    }

    // Event Listeners
    btnTidak.addEventListener('click', () => {
        containerInput.classList.add('hidden');
        hitungIP(false); // Langsung muncul nilai
    });

    btnLakukan.addEventListener('click', () => {
        containerInput.classList.remove('hidden');
        containerNilai.classList.add('hidden');
    });

    btnSubmit.addEventListener('click', () => hitungIP(true));
});