window.addEventListener("DOMContentLoaded", init);

function init() {
    const KEY = "intell-terms";

    const data = [
        "Javascript",
        "HTML",
        "Css",
        "Css_Frameworks",
        "PostCss",
        "Scss",
        "React",
        "NeuralNetwork",
        "Typesript",
        "Node",
        "Python",
        "Php",
        "Canvas",
    ];

    localStorage.setItem(KEY, JSON.stringify(data));

    const efficientSearch = intell(search, 300);

    const input = document.getElementById("search-inp");
    input.addEventListener("input", efficientSearch);

    function search() {
        const value = this.value;
        document.querySelector(".output").innerHTML = `ITEM NAME: ${value}`;
        const ul = document.querySelector(".match");

        getList(value)
            .then((lists) => {
                ul.innerHTML = "";
                if (lists.length <= 0) {
                    const li = document.createElement("li");
                    li.innerHTML = "NO LANGUAGE FOUND";
                    ul.appendChild(li);
                } else {
                    lists.forEach((list) => {
                        const li = document.createElement("li");
                        li.innerHTML = list;
                        ul.appendChild(li);
                    });
                }
            })
            .catch((err) => {
                console.warn(err.message);
            });
    }

    function getList(txt) {
        return new Promise((resolve, reject) => {
            const r = Math.floor(Math.random() * 1000);
            setTimeout(
                function () {
                    const t = "^" + this.toString();
                    const reg = new RegExp(t, "i");
                    const terms = JSON.parse(localStorage.getItem(KEY));
                    const matches = terms.filter((term) => reg.test(term));
                    resolve(matches);
                }.bind(txt, r)
            );
        });
    }

    function intell(func, wait, immediate) {
        let timeout;
        return function () {
            const context = this,
                arg = arguments;

            const callnow = immediate && !timeout;

            const later = () => {
                timeout = null;
                if (!immediate) func.apply(context, arg);
            };

            clearTimeout(timeout);

            time = setTimeout(later, wait);

            if (callnow) func.apply(context, arg);
        };
    }
}
