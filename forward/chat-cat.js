let catagory = {
    birthday: {
        polite: 'Polite Replies',
        harsh: 'Harsh Replies',
        double: 'Double meaning',
        abuse: 'Vulgar',
        lastNode: true
    },
    festival: {
        diwali: {
            polite: 'Polite Replies',
            harsh: 'Harsh Replies',
            double: 'Double meaning',
            abuse: 'Vulgar',
            lastNode: true
        },
        holi: {
            polite: 'Polite Replies',
            harsh: 'Harsh Replies',
            double: 'Double meaning',
            abuse: 'Vulgar',
            lastNode: true
        },
        christmas: {
            polite: 'Polite Replies',
            harsh: 'Harsh Replies',
            double: 'Double meaning',
            abuse: 'Vulgar',
            lastNode: true
        },
        lastNode: false
    },
    general: {
        polite: 'Polite Replies',
        harsh: 'Harsh Replies',
        double: 'Double meaning',
        abuse: 'Vulgar',
        lastNode: true
    },
    lastNode: false
}

let addCatagory = (eve) => {
    let chat_cat_lbl = document.getElementById('chat-cat-lbl');

    // the below If statement is added to delete previously selected sub options if used reselect other option
    if (eve) {
        while (chat_cat_lbl.lastElementChild !== eve.target) {
            chat_cat_lbl.lastElementChild.remove();
        }
    }

    // remove text copied alert if it is present there
    if (typeof hide_url_copy_alert === 'function') hide_url_copy_alert();

    let sub_cat = {
        elm: null,
        level: chat_cat_lbl.children.length + 1
    }

    let getObject = (obj, penetration_level) => {
        if (obj.lastNode) { return obj; }
        else {
            for (let i = 1, itrn_no = penetration_level; i < itrn_no; i++) {
                obj = obj[document.getElementById(`chat-catagory-${i}`).value]
            }
            return obj;
        }
    }

    let object = getObject(catagory, sub_cat.level);

    if (typeof object === 'object') {

        chat_cat_lbl.insertAdjacentHTML('beforeend', `<select name="chat-catagory-${sub_cat.level}" id="chat-catagory-${sub_cat.level}"></select>`);
        sub_cat.elm = document.getElementById(`chat-catagory-${sub_cat.level}`);
        sub_cat.elm.addEventListener('input', addCatagory);
        sub_cat.elm.insertAdjacentHTML('afterbegin', `<option value="noSelection">Select</option>`);
        for (const key in object) {
            if (object.hasOwnProperty(key)) {
                const elm = object[key];
                if (object.lastNode) {
                    // below if statment is added to avoid addition of 'lastNode' property in options
                    if (elm !== true)
                        sub_cat.elm.insertAdjacentHTML('beforeend', `<option value="${key}">${elm}</option>`);
                } else {
                    // below if statment is added to avoid addition of 'lastNode' property in options
                    if (elm)
                        sub_cat.elm.insertAdjacentHTML('beforeend', `<option value="${key}">${key}</option>`);
                }
            }
        }
    } else {
        return null;
    }
}
addCatagory();

let create_chat_cat_url_encoding_fn = () => {
    let chat_cat_lbl = document.getElementById('chat-cat-lbl');
    let chat_cat_lbl_child = chat_cat_lbl.children;
    let chat_Cat_url_encoding = "";
    for (let index = 0, itrn_no = chat_cat_lbl_child.length; index < itrn_no; index++) {
        const sl_elm = chat_cat_lbl_child[index];
        chat_Cat_url_encoding += `/${sl_elm.value}`;
    }
    chat_Cat_url_encoding += '.json';
    return chat_Cat_url_encoding;
}