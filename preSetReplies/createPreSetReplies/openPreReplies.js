let callback_open_file_btn_clicked = (eve) => {
    file_in.click();
}

let WriteMessagesOnScreen = (data) => {
    if (!export_btn) {
        let export_btn = document.getElementById('export-btn');
        alert('save current messages');
        export_btn.click();
    } else {
        alert('save current messages');
        export_btn.click();
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