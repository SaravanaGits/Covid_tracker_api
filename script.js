var div = document.createElement("div");
div.style.textAlign = "center";
var input = document.createElement("input");
input.setAttribute("type", "text");
input.setAttribute("id", "inputbox");
input.setAttribute("placeholder", "Enter a country in lowercase");
var button = document.createElement("button");
button.classList.add("btn", "btn-primary");
button.innerHTML = "Search"
button.addEventListener("click", search);
var active = document.createElement("div");
active.setAttribute("id", "active");
div.append(input, button, active);
section.append(div);
document.body.append(section);


async function search() {
    let userinput = document.getElementById('inputbox').value;



    let url = `https://api.covid19api.com/dayone/country/${userinput}`;

    let res = await fetch(url);
    let res1 = await res.json();
    let index = res1.length - 1;

    active.innerHTML = `<div class="card border-primary mt-5 mb-3" style="max-width: 25rem;">
    <div class="card-header "><h2>${userinput.toUpperCase()}</h2></div>
    <div class="card-body">
     
      <table class="table">
      <tr class="table-warning">
      <td class="status-td"><strong>Total Active Cases</strong>
      </td>
      <td class="count">${Number(res1[index].Active).toLocaleString()}
      </td></tr>
      <tr class="table-success">
      <td class="status-td"><strong>Total Recovered Cases</strong>
      </td>
      <td class="count">${Number(res1[index].Recovered).toLocaleString()}
      </td></tr>
      <tr class="table-danger">
      <td class="status-td"><strong>Total Death Cases</strong>
      </td>
      <td class="count">${Number(res1[index].Deaths).toLocaleString()}
      </td></tr>
      </table>

    </div>
      </div>`;
}