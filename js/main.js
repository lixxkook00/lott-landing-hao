const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const toggleNavMobile = () => {
    $('.soft-menu').classList.toggle('open')
    $('.soft-menu__list').classList.toggle('open')
}

$('.soft-menu__list').onclick = (e) => {
    e.stopPropagation()
}

$$('.soft-menu__item').forEach((item) => {
    // item.childNodes[1].PreventDefault;
    item.onclick = () => {
        let dataAddress = item.childNodes[1].getAttribute("data-address");
        if (dataAddress !== "") {
            document
                .querySelector(`#${dataAddress}`)
                .scrollIntoView({ behavior: "smooth" });
            toggleNavMobile()
        }
    };
});

$$('.header-item').forEach((item) => {
    // item.childNodes[1].PreventDefault;
    item.onclick = () => {
        let dataAddress = item.getAttribute("data-address");
        if (dataAddress !== "") {
            document
                .querySelector(`#${dataAddress}`)
                .scrollIntoView({ behavior: "smooth" });
            // toggleNavMobile()
        }
    };
});

// HANDLE SHOW MODAL MODAL

let currentVideoID = 0;

const videoContent = [
    {
        title: "Bước 1. Đăng ký tài khoản",
        urlVideo:"https://www.youtube.com/embed/pFLl-4zz0AE"
    },
    {
        title: "Bước 2. Đăng nhập tài khoản",
        urlVideo:"https://www.youtube.com/embed/JjOI_dSumAQ"
    },
    {
        title: "Bước 3. Chuyển điểm vào tài khoản",
        urlVideo:"https://www.youtube.com/embed/ZJ6Z0ZloH9g"
    },
    {
        title: "Bước 4. Cách nạp và rút",
        urlVideo:"https://www.youtube.com/embed/HHQrklSmLW8"
    },
    {
        title: "Bước 5. Cách tra cứu số may mắn",
        urlVideo:"https://www.youtube.com/embed/0Kio6qdElTg"
    },
    {
        title: "Bước 6. Mua vé",
        urlVideo:"https://www.youtube.com/embed/hk5KVY8jfVo"
    },
    {
        title: "Bước 7. Đổi mật khẩu (nếu cần)",
        urlVideo:"https://www.youtube.com/embed/zbMe4aW382Q"
    }
    
]

const playVideoWithID = (id) => {
    currentVideoID = id
    renderContentVideo(id)
}

const renderContentVideo = (id) => {
    currentVideoID = parseInt(id)
    
    let videoData = videoContent[currentVideoID];

    const controlHTML = videoContent.map((item,index) => {
        let temp =""
        if(index==currentVideoID){
            temp = "active"
        }
        return (
            `
                <div class="video-content-item ${temp}" onclick="renderContentVideo(${index})">
                    ${index+1}
                </div>
            `
        )
    }).join("")

    console.log(currentVideoID)

    $('.modal-content').innerHTML = (
        `
            <div class="modal-control">
                <div class="modal-control-item" onclick="prevVideo()">
                    <i class="fa-solid fa-chevron-left"></i>
                </div>
                <div class="modal-control-item" onclick="nextVideo()">
                    <i class="fa-solid fa-chevron-right"></i>
                </div>
            </div>
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                    ${videoData.title}
                </h5>
            </div>
            <div class="modal-body centering">
                <div class="video-content">
                    <iframe width="100%" src="${videoData.urlVideo}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                </div>
                <div class="video-content-list d-flex">
                    
                    ${controlHTML}
                </div>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">
                    Đóng
                </button>
            </div> 
        `
    )
}

const nextVideo = () => {
    if(currentVideoID<videoContent.length-1){
        renderContentVideo(currentVideoID+1)
    }else{
        renderContentVideo(0)
    }
}

const prevVideo = () => {
    if(currentVideoID>0){
        renderContentVideo(currentVideoID-1)
    }else{
        renderContentVideo(videoContent.length-1)
    }
}

$$('.video-icon').forEach((item) => {
    item.onclick = () => {
        playVideoWithID(item.getAttribute("data-video"))
    }
});



window.onload = (event) =>{
    var myModal = new bootstrap.Modal(document.getElementById('signUpModal'), {
        keyboard: false
    })
    myModal.show();
    
    // const tempURL = "https://Victoryle.unimmo.net/"

    // console.log(document.URL)
    
};

const nameThisShit = /:\/\/([^\/]+).unimmo.net/.exec(window.location.href)
const refNameThisShit = nameThisShit[1]

if(nameThisShit==="xosoblockchain"){
    refNameThisShit="seven"
}
 
$$('.ref-link').forEach((item) => {
    item.href = `https://lottpower.org/signup/${refNameThisShit}`
});

let flat = true;

window.onscroll = function () {
    var myModal = new bootstrap.Modal(document.getElementById('signUpModal'), {
        keyboard: false
    })

    if($('#product').getBoundingClientRect?.().y < 0 && flat===true){
        flat=false
        myModal.show();
    }
};

