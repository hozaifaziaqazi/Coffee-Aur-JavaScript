const insert = document.getElementById("insert");

window.addEventListener('keydown', (e) => {
    insert.innerHTML = `
    <div class='color'>
    <table>
    <tr>
    <td>${e.key === ` ` ? 'Space' : e.key}</td>
    </tr>
    </table>
    </div>
    `;
})
