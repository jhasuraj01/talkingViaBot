let create_JSON_replies_data = () => {
    let preSeRreplies_arr = [];
    let message_set_Container = document.getElementById('message-set-Container');

    // Wanna write the below code using forEach loop
    let msg_sets_arr = message_set_Container.children;
    for (let set_index = 0; set_index < msg_sets_arr.length; set_index++) {
        const set = msg_sets_arr[set_index];
        const msgs = set.children; // array of input bar in each message set.
        let temp_set_arr = [];
        for (let msg_index = 1; msg_index < msgs.length; msg_index++) {
            const msg = msgs[msg_index];
            if (msg.value !== "") temp_set_arr.push(msg.value);
        }
        if (temp_set_arr.length) preSeRreplies_arr.push(temp_set_arr);
    }
    // console.log(preSeRreplies_arr);
    return JSON.stringify(preSeRreplies_arr);
    // return null;
}

// recieves file object and download it on clint side.
let downloadFile = (file) => {
    let blob = new Blob([file.data], { type: file.type });
    let elem = window.document.createElement('a');
    elem.href = window.URL.createObjectURL(blob);
    elem.download = file.name;
    elem.style.display = 'none';
    document.body.appendChild(elem);
    elem.click();
    document.body.removeChild(elem);
};

let exportReplies = () => {
    let data = create_JSON_replies_data();
    
    let file = {
        name: document.getElementById('file-name').value + '.json',
        type: 'text/csv',
        data: data
    }
    if(data !== null) downloadFile(file);
}

let export_btn = document.getElementById('export-btn');
export_btn.addEventListener('click', exportReplies);