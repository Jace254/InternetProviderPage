const DetailsButton = document.getElementById("details")
const PasswordButton = document.getElementById("password")
const form = document.getElementById("form")


DetailsButton.onclick(e => {
    e.preventDefault()
    form.innerHTML = `
    <label class="mt-2">Email</label>
    <input
        type="email"
        placeholder=" your-email@domain.com"
        class="w-full border border-slate-400 rounded-none px-1"
    />
    <label class="mt-2">First Name</label>
    <input
        type="text"
        placeholder=" Micheal Kigumi"
        class="w-full border border-slate-400 rounded-none px-1"
    />
    <label class="mt-2">Last Name</label>
    <input
        type="text"
        placeholder=" Mwangi"
        class="w-full border border-slate-400 rounded-none px-1"
    />
    <label class="mt-2">Address</label>
    <input
        type="textarea"
        placeholder=" Mega Mall,Kakamega,Kenya"
        class="w-full border border-slate-400 rounded-none px-1"
    />
    <label class="mt-2">City</label>
    <input
        type="text"
        placeholder=" Kakamega"
        class="w-full border border-slate-400 rounded-none px-1"
    />
    <label class="mt-2">Mobile Phone</label>
    <input
        type="text"
        placeholder=" 0719320139"
        class="w-full border border-slate-400 rounded-none px-1"
    />
    <button
        type="submit"
        class="w-full bg-orange-500 text-xs text-white py-2 mt-2 mb-2 hover:bg-orange-600"
    >
        Update Details
    </button>`
})

PasswordButton.onclick(() => {
    form.innerHTML = `
    <label class="mt-2">Email</label>
    <input
        type="email"
        placeholder=" your-email@domain.com"
        class="w-full border border-slate-400 rounded-none px-1"
    />
    <label class="mt-2">First Name</label>
    <input
        type="text"
        placeholder=" Micheal Kigumi"
        class="w-full border border-slate-400 rounded-none px-1"
    />
    <label class="mt-2">Last Name</label>
    <input
        type="text"
        placeholder=" Mwangi"
        class="w-full border border-slate-400 rounded-none px-1"
    />
    <button
        type="submit"
        class="w-full bg-orange-500 text-xs text-white py-2 mt-2 mb-2 hover:bg-orange-600"
    >
        Update Details
    </button>`
})
