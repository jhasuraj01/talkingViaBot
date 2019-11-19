let last_focused_in = null;
let callback_onfocus = (eve) => {
    last_focused_in = eve.target;
}

let add_new_msg_in_above_fn = (eve) => {
    if (last_focused_in) {
        last_focused_in.insertAdjacentHTML('beforebegin', '<input type="text" class="message-input">');
        last_focused_in.previousElementSibling.addEventListener('focus', callback_onfocus);
        last_focused_in.previousElementSibling.focus();
    }
}
let add_new_msg_in_below_fn = (eve) => {
    if (last_focused_in) {
        last_focused_in.insertAdjacentHTML('afterend', '<input type="text" class="message-input">');
        last_focused_in.nextElementSibling.addEventListener('focus', callback_onfocus);
        last_focused_in.nextElementSibling.focus();
    }
}
let add_msg_set_above_fn = (eve) => {
    if (last_focused_in) {
        let element = `
        <fieldset class="message-set">
            <legend class="message-set-header">Message Set</legend>
            <input type="text" class="message-input">
        </fieldset>`;
        last_focused_in.parentNode.insertAdjacentHTML('beforebegin', element);
        last_focused_in.parentNode.previousElementSibling.children[1].addEventListener('focus', callback_onfocus);
        last_focused_in.parentNode.previousElementSibling.children[1].focus();
    }
}
let add_msg_set_below_fn = (eve) => {
    if (last_focused_in) {
        let element = `
        <fieldset class="message-set">
            <legend class="message-set-header">Message Set</legend>
            <input type="text" class="message-input">
        </fieldset>`;
        last_focused_in.parentNode.insertAdjacentHTML('afterend', element);
        last_focused_in.parentNode.nextElementSibling.children[1].addEventListener('focus', callback_onfocus);
        last_focused_in.parentNode.nextElementSibling.children[1].focus();
    }
}
let delete_msg_in_fn = (eve) => {
    if (last_focused_in) {
        if (last_focused_in.parentNode.children.length > 2) {
            last_focused_in.remove();
        }
        else {
            delete_msg_set_fn();
        }
    }
}
let delete_msg_set_fn = (eve) => {
    if (last_focused_in) {
        if (last_focused_in.parentNode.parentNode.children.length > 1) {
            last_focused_in.parentNode.remove();
        }
        else {
            // do not delete the only input element available
            console.warn('do not delete the only input element available');
        }
    }
}

let msg_in_array = document.querySelectorAll('.message-input');
msg_in_array.forEach(elm => elm.addEventListener('focus', callback_onfocus));

let add_new_msg_in_above_btn = document.getElementById('add-new-msg-in-above-btn');
add_new_msg_in_above_btn.addEventListener('click', add_new_msg_in_above_fn);

let add_new_msg_in_below_btn = document.getElementById('add-new-msg-in-below-btn');
add_new_msg_in_below_btn.addEventListener('click', add_new_msg_in_below_fn);

let add_msg_set_above_btn = document.getElementById('add-msg-set-above-btn');
add_msg_set_above_btn.addEventListener('click', add_msg_set_above_fn);

let add_msg_set_below_btn = document.getElementById('add-msg-set-below-btn');
add_msg_set_below_btn.addEventListener('click', add_msg_set_below_fn);

let delete_msg_in_btn = document.getElementById('delete-msg-in-btn');
delete_msg_in_btn.addEventListener('click', delete_msg_in_fn);

let delete_msg_set_btn = document.getElementById('delete-msg-set-btn');
delete_msg_set_btn.addEventListener('click', delete_msg_set_fn);