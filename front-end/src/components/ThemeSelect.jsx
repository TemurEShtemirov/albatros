export function DarkTheme (){
    return `
        ${
          mode
            ? `${i % 2 !== 0 ? "" : "!bg-[#F2EAE1]"}`
            : `!bg-[#414345] border-b-gray-500 text-white ${
                i % 2 === 0 ? "!bg-[#414345]" : "!bg-[#6B7280]"
              }`
        }
    `;
}