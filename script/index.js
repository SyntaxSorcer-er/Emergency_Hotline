// ================== COPY BUTTON HANDLE ==================
const copyButtons = document.querySelectorAll("button[id^='copy-btn']");
const copyCounter = document.getElementById("copy");
let copyCount = 0;

copyButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const card = btn.closest(".bg-white");
    const numberElement = card.querySelector("span[id^='number']");
    const copyNumber = numberElement.textContent;

    // ক্লিপবোর্ডে কপি
    navigator.clipboard.writeText(copyNumber).then(() => {
      console.log(`Copied: ${copyNumber}`);
    });

    // Copy কাউন্টার বাড়াও
    copyCount++;
    copyCounter.textContent = copyCount;

    // Alert দেখাও
    alert("নম্বর কপি হয়েছে: " + copyNumber);
  });
});

// ================== HEART ICON HANDLE ==================
const heartIcons = document.querySelectorAll(".fa-heart");
const headerHeartCounter = document.querySelector(
  "header div:first-child ~ div div:first-child span"
);

let heartCount = 0;

heartIcons.forEach((icon) => {
  icon.addEventListener("click", () => {
    heartCount++;
    headerHeartCounter.textContent = heartCount;
    icon.classList.toggle("text-red-500"); // ক্লিক করলে লাল হবে
  });
});

// ================== CALL BUTTON HANDLE ==================
const callButtons = document.querySelectorAll("button[id^='card-btn']");
const coinCounter = document.querySelector(
  "header div:first-child ~ div div:nth-child(2) span"
); // হেডারের কয়েন counter
let coins = parseInt(coinCounter.textContent); // শুরুতে কয়েন

const callHistoryBox = document.getElementById("card-container");
const clearBtn = document.querySelector("aside button"); // Clear button

callButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    if (coins < 20) {
      alert("আপনার কাছে পর্যাপ্ত কয়েন নেই (কমপক্ষে ২০ লাগবে)!");
      return;
    }

    // কয়েন কমাও
    coins -= 20;
    coinCounter.textContent = coins;

    // কার্ড থেকে নাম্বার + টাইটেল বের করো
    const card = btn.closest(".bg-white");
    const numberElement = card.querySelector("span[id^='number']");
    const callNumber = numberElement.textContent;

    const titleElement = card.querySelector("h3");
    const callTitle = titleElement ? titleElement.textContent : "Unknown";

    // লোকাল টাইম (English format)
    const now = new Date();
    const time = now.toLocaleTimeString("en-US", {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true,
    });

    // Call History Item বানাও (Card Design)
    const historyItem = document.createElement("div");
    historyItem.className =
      "bg-white shadow-md rounded-lg p-3 mb-3 flex justify-between items-center";
    historyItem.innerHTML = `
      <div>
        <span class="font-semibold block">${callTitle}</span>
        <span class="text-gray-700"> ${callNumber}</span>
      </div>
      <span class="text-sm text-gray-500">${time}</span>
    `;

    callHistoryBox.prepend(historyItem); // হিস্টোরির উপরে যোগ করো

    alert("📞 Calling National Emergency number: " + callNumber);
  });
});

// ================== CLEAR CALL HISTORY ==================
clearBtn.addEventListener("click", () => {
  callHistoryBox.innerHTML = "";
});
