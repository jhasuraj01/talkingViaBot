let callback_open_file_btn_clicked = (eve) => {
    file_in.click();
}
let deleteAllMessages = () => {

    let msg_set_container = document.getElementById('message-set-Container');
    msg_set_arr = msg_set_container.children;

    // delete all the messages and refresh the UI
    for (let set_index = 1, msg_set_arr_len = msg_set_arr.length; set_index < msg_set_arr_len; set_index++) {
        msg_set_arr[1].remove(); // since each time we delete the node, the next node will occupy the position of first node
    }
    msg_in_firstSet_arr = msg_set_arr[0].children;
    for (let msg_index = 2, msg_in_firstSet_arr_len = msg_in_firstSet_arr.length; msg_index < msg_in_firstSet_arr_len; msg_index++) {
        msg_in_firstSet_arr[2].remove();
    }
    msg_in_firstSet_arr[1].value = '1';
    msg_in_firstSet_arr[1].focus();
    alert('okay');

}
let WriteMessagesOnScreen = (data) => {

    // alert system for saving current messages
    if (!export_btn) {
        let export_btn = document.getElementById('export-btn');
        alert('save current messages');
        export_btn.click();
    } else {
        alert('save current messages');
        export_btn.click();
    }

    deleteAllMessages();
    
    // now write the messages from data to the screen
    for (let i = 0; i < data.length; i++) {
        for (let ii = 0; ii < data[i].length; ii++) {
            const msg = data[i][ii];
            last_focused_in.value = msg;
            if (ii + 1 < data[i].length) add_new_msg_in_below_fn();
        }
        if (i + 1 < data.length) add_msg_set_below_fn();
    }
}

let open_file_fn = () => {
    if (file_in.value) {
        let file = file_in.files[0];

        // a reader is set to read the uploaded file.
        let reader = new FileReader();
        reader.onload = (eve) => {
            let data = eve.target.result;
            WriteMessagesOnScreen(JSON.parse(data));
        }
        reader.readAsText(file_in.files[0], "UTF-8");
    }
    else {
        console.error('no file is selected');
    }
}
let open_file_btn = document.getElementById('open-file-btn');
open_file_btn.addEventListener('click', callback_open_file_btn_clicked);

let file_in = document.getElementById('file-in');
file_in.addEventListener('input', open_file_fn);