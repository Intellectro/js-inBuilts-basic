window.addEventListener("DOMContentLoaded", init);

const KEY = "debounce-terms";

function init() {
    const data = [
        "Egg",
        "Mango",
        "garri",
        "beans",
        "plantain",
        "curry",
        "apple",
        "ofensala",
        "ofeokulu",
        "ofeegusi",
        "ofeede",
        "ofe-oha",
    ];

    let efficientSearch = debounce(search, 300);

    document
        .getElementById("search-inp")
        .addEventListener("input", efficientSearch);

    localStorage.setItem(KEY, JSON.stringify(data));

    function search() {
        const text = this.value;
        const ul = document.querySelector(".match");
        document.querySelector(".output").innerHTML = `LIST OUT ${text}`;

        getList(text)
            .then((list) => {
                ul.innerHTML = "";
                if (list.length <= 0) {
                    const li = document.createElement("li");
                    li.innerHTML = "NO MATCHES";
                    ul.appendChild(li);
                } else {
                    list.forEach((item) => {
                        const li = document.createElement("li");
                        li.innerHTML = item;
                        ul.appendChild(li);
                    });
                }
            })
            .catch((err) => console.warn(err.message));
    }

    function getList(txt) {
        return new Promise((resolve, reject) => {
            const r = Math.floor(Math.random() * 1000);
            setTimeout(
                function () {
                    const t = "^" + this.toString();
                    const pattern = new RegExp(t, "i");
                    const terms = JSON.parse(localStorage.getItem(KEY));
                    const matches = terms.filter((term) => pattern.test(term));
                    resolve(matches);
                }.bind(txt, r)
            );
        });
    }

    function debounce(func, wait, immediate) {
        let timeout;
        return function () {
            let context = this,
                args = arguments;
            let later = function () {
                timeout = null;
                if (!immediate) func.apply(context, args);
            };
            let callnow = immediate && !timeout;
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
            if (callnow) func.apply(context, args);
        };
    }
}
