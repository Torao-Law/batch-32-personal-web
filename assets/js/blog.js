let blogs = []
let checkedValue = [];

function addProject() {
    let projectName = document.getElementById('project-name').value
    let projectDesc = document.getElementById('project-description').value
    let startDate = document.getElementById('start-date').value
    let endDate = document.getElementById('end-date').value

    let projectImg = document.getElementById('add-image-project').files[0]
    if (projectImg) {
        projectImg = URL.createObjectURL(projectImg)
    }

    checkedValue = [];
    let inputElements = document.getElementsByClassName('checkboxitem');
    let data = inputElements.length
    for (var i = 0; i < data; i++) {
        if (inputElements[i].checked == true) {
            checkedValue.push(inputElements[i].value)
        }
    }

    let blog = {
        projectName: projectName,
        projectDesc: projectDesc,
        startDate: startDate,
        endDate: endDate,
        projectImg: projectImg,
        postedAt: new Date(),
        checkedValue
    }

    console.log(blog)
    blogs.push(blog)

    renderProject()
}

function renderProject() {
    let postBlog = document.getElementById('contents')
    let data = checkedValue.length
    postBlog.innerHTML = ''

    for (let i = 0; i < blogs.length; i++) {
        postBlog.innerHTML += `<div class="card-wrapper">
        <div class="image-project">
            <img alt="imgpost" src=${blogs[i].projectImg ? blogs[i].projectImg : "assets/img/image1.jpg"}  />
        </div>
        <div class="content-post">
            <h5>${blogs[i].projectName}</h5>
            <p class="durasipost">${getDuration(blogs[i].startDate, blogs[i].endDate)}</p>
            <p class="descpost">${blogs[i].projectDesc}</p>
            <div class="icon-post">
            ${(function icon() {
                let string = ""
                for (let j = 0; j < data; j++) {
                    string += `<div class="icon-post-item">
                        <i class="${blogs[i].checkedValue[j]}"></i>
                    </div>`
                }
                return string
            })()}
            </div>
        </div>
        <div style="font-size: .75rem; margin-top:.25rem; color:grey;">

        </div>

        <div class="post-action">
            <a href="#">
                <p class="editPost">Edit</p>
            </a>
            <a href="#">
                <p class="deletePost">Delete</p>
            </a>
        </div>
    </div>`
    }
}

let month = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "Oktober",
    "November",
    "Desember"
]

function getTimePosted(time) {
    let day = time.getDate()
    let monthIndex = time.getMonth()
    let year = time.getFullYear()

    let hour = time.getHours()
    let minute = time.getMinutes()

    let fulltime = `${day} ${month[monthIndex]} ${year}  |  ${hour} : ${minute} WIB`
    return fulltime
}


function getTimeDistance(time) {
    let timeNow = new Date()
    let timeBlog = new Date(time)
    let distance = timeNow - timeBlog

    let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
    if (daysDistance != 0) {
        return daysDistance + ' Days Ago'
    } else {
        let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
        if (hoursDistance != 0) {
            return hoursDistance + ' Hours Ago'
        } else {
            let minuteDistance = Math.floor(distance / (60 * 1000))
            if (minuteDistance != 0) {
                return minuteDistance + ' Minutes Ago'
            } else {
                let secondDistance = Math.floor(distance / 1000)
                if (secondDistance != 0)
                    return secondDistance + ' sec'

            }
        }
    }
}

// setInterval(() => {
//     renderProject()
// }, 1000);

function getDuration(start, end) {
    let proStart = new Date(start)
    let proEnd = new Date(end)

    let distance = proEnd - proStart

    let monthDistance = Math.floor(distance / (30 * 24 * 60 * 60 * 1000))
    if (monthDistance != 0) {
        return monthDistance + ' month'
    } else {
        let weekDistance = Math.floor(distance / (7 * 24 * 60 * 60 * 1000))
        if (weekDistance != 0) {
            return weekDistance + ' weeks'
        } else {
            let daysDistance = Math.floor(distance / (24 * 60 * 60 * 1000))
            if (daysDistance != 0) {
                return daysDistance + ' Days Ago'
            } else {
                let hoursDistance = Math.floor(distance / (60 * 60 * 1000))
                if (hoursDistance != 0) {
                    return hoursDistance + ' Hours Ago'
                } else {
                    let minuteDistance = Math.floor(distance / (60 * 1000))
                    if (minuteDistance != 0) {
                        return minuteDistance + ' Minutes Ago'
                    } else {
                        let secondDistance = Math.floor(distance / 1000)
                        if (secondDistance != 0)
                            return secondDistance + ' sec'
                    }
                }
            }
        }
    }
}