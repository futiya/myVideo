window.onload = function () {
    //Video
    var video = document.getElementById("video");
    video.src = "resources/Demo1.mp4"
    //Button
    var playButton = document.getElementById("play");
    var pauseButton = document.getElementById("pause");
    var muteButton = document.getElementById("mute");
    var likeButton = document.getElementById("like");
    var unlikeButton = document.getElementById("unlike");
    //Disable pause button when first load page
    pauseButton.disabled = true;

    //Count
    var likeCount = document.getElementById("like-count");
    var unlikeCount = document.getElementById("unlike-count");
    var stopButton = document.getElementById("stop");
    var list1 = document.getElementById("list1");
    var list2 = document.getElementById("list2");

    //Volumn
    var volumeUp = document.getElementById("volume-up");
    var volumeDown = document.getElementById("volume-down");

    //Bar
    var progressBar = document.getElementById("progress");
    //var rangeBar = document.getElementById("range-bar");






    //Event listener for play button
    playButton.addEventListener("click", function () {
        video.play();
        playButton.disabled = true
        pauseButton.disabled = false;
        stopButton.disabled = false;
    });
    //Event listener for pause button
    pauseButton.addEventListener("click", function () {
        if (video.paused == false) {
            video.pause();
            playButton.disabled = false;
            pauseButton.disabled = true;
            stopButton.disabled = true;
        }
    });
    //Event listener for the volumn up
    volumeUp.addEventListener("click", function () {
        video.volume = parseFloat(video.volume) + parseFloat(volumeUp.value);
    });

    //Event listener for the volumn down
    volumeDown.addEventListener("click", function () {
        video.volume = parseFloat(parseFloat(video.volume) - parseFloat(volumeDown.value)).toFixed(10);
    });

    //Event listener for the stop button
    stopButton.addEventListener("click", function () {
        video.currentTime = 0;
        video.pause();
        video.paused = true;
        playButton.disabled = false;
        pauseButton.disabled = true;
    });

    //Event listener for the progress bar
    // rangeBar.addEventListener("change", function () {
    //     //calculate the new time
    //     var time = (rangeBar.value / 100) * video.duration
    //     //update the video time
    //     video.currentTime = time;
    // });

    //Event listener for update progress bar as video plays
    video.addEventListener("timeupdate", function () {
        //calculate progress bar value
        var value = (100 / video.duration) * video.currentTime;
        //update the progress bar value
        //rangeBar.value = value;
        progressBar.value = video.currentTime / video.duration;

    });

    //Event listner for mute button
    muteButton.addEventListener("click", function () {
        if (video.muted == true) {
            video.muted = false;
        } else {
            video.muted = true;
        }
    });

    //Event listner for like 
    likeCount.textContent = localStorage.Demo1Likes;
    likeButton.addEventListener("click", function () {
        var name = getVideoName(video.src);
        var likes = name+"Likes";
        if (localStorage.getItem(likes)) {
            localStorage.setItem(likes,Number(localStorage.getItem(likes)) + 1) ;
        } else {
            localStorage.setItem(likes,1) ;
        }
        likeCount.textContent = localStorage.getItem(likes);
    });


    //Event listner unlike
    unlikeCount.textContent = localStorage.Demo1UnLikes;
    unlikeButton.addEventListener("click", function () {
        var name = getVideoName(video.src);
        var unlikes = name+"UnLikes";
        if (localStorage.getItem(unlikes)) {
            localStorage.setItem(unlikes,Number(localStorage.getItem(unlikes)) + 1) ;
        } else {
            localStorage.setItem(unlikes,1);
        }
        unlikeCount.textContent = localStorage.getItem(unlikes);
    });

    //Event listner unlike list1
    list1.addEventListener("click", function () {
        video.src = list1.src;
        likeCount.textContent = localStorage.Demo1Likes;
        unlikeCount.textContent = localStorage.Demo1UnLikes;
        pauseButton.disabled = false;
        playButton.disabled = true;
        video.currentTime = 0;
        video.play();
    });

    //Event listner unlike list2
    list2.addEventListener("click", function () {
        video.src = list2.src;
        likeCount.textContent = localStorage.Demo2Likes;
        unlikeCount.textContent = localStorage.Demo2UnLikes;
        pauseButton.disabled = false;
        playButton.disabled = true;
        video.currentTime = 0;
        video.play();
    });

    //Event listner unlike list3
    list3.addEventListener("click", function () {
        video.src = list3.src;
        likeCount.textContent = localStorage.Demo3Likes;
        unlikeCount.textContent = localStorage.Demo3UnLikes;
        pauseButton.disabled = false;
        playButton.disabled = true;
        video.currentTime = 0;
        video.play();
    });

    //Event listner unlike list4
    list4.addEventListener("click", function () {
        video.src = list4.src;
        likeCount.textContent = localStorage.Demo4Likes;
        unlikeCount.textContent = localStorage.Demo4UnLikes;
        pauseButton.disabled = false;
        playButton.disabled = true;
        video.currentTime = 0;
        video.play();
    });

}

function getVideoName(source) {
    return source.substring(source.lastIndexOf("/") + 1, source.lastIndexOf("."));
}
