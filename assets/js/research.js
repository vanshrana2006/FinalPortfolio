/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Face Detection (468 face landmarks)",
    authors:
      "Vansh Rana",
    conferences:
      "Personal Computer Vision Project",
    researchYr: 2024,
    citebox: "popupFaceMesh",
    image: "assets/images/project-page/22.jpg",
    citation: {
      vancouver:
        "Vansh Rana. Face Detection (468 face landmarks) using MediaPipe Face Mesh. Personal Computer Vision Project, 2024."
    },
    abstract:
      "Developed a face detection system using Python and MediaPipe's Face Mesh to identify 468 facial landmarks in real time. Useful for facial analysis, emotion detection, and AR applications.",
    absbox: "absPopupFaceMesh"
  },

  {
    title: "AI Virtual Mouse",
    authors:
      "Vansh Rana",
    conferences:
      "Personal Computer Vision Project",
    researchYr: 2024,
    citebox: "popupAIMouse",
    image: "assets/images/project-page/33.jpeg",
    citation: {
      vancouver:
        "Vansh Rana. AI Virtual Mouse using Hand Gesture Recognition. Personal Computer Vision Project, 2024."
    },
    abstract:
      "Implemented an AI-powered virtual mouse using Python and OpenCV, enabling users to control the cursor and perform click actions through real-time hand gesture recognition.",
    absbox:"absPopupAIMouse"
  },

  {
    title:
      "Sentiment Analysis",
    authors: "Vansh Rana",
    conferences:
      "Personal Machine Learning Project",
    researchYr: 2024,
    citebox: "popupSentiment",
    image: "assets/images/project-page/music.jpg",
    citation: {
      vancouver:
         "Vansh Rana. Sentiment Analysis using Machine Learning. Personal Machine Learning Project, 2024.",
    },
    abstract:
      "Built a sentiment analysis model using Python to classify text data as positive, negative, or neutral. Implemented preprocessing, feature extraction, and classification techniques using popular ML libraries.",
    absbox: "absPopupSentiment"
  },

  {
    title:
      "Jarvis: A Personal Voice Assistant",
    authors:
      "Vansh Rana",
    conferences:
      "Personal Python Project",
    researchYr: 2024,
    citebox: "popupJarvis",
    image: "assets/images/project-page/recipe.jpg",
    citation: {
      vancouver:
        "Vansh Rana. Jarvis: A Personal Voice Assistant using Python. Personal Python Project, 2024.",
    },
    abstract:
      "Created a voice-controlled assistant using Python capable of performing tasks like opening apps, searching the web, telling time, and more through speech recognition and automation libraries.",
    absbox:  "absPopupJarvis"
  },

  {
    title: "Temperature Detector",
    authors: "Vansh Rana",
    conferences:
      "Personal Python Project",
    researchYr: 2024,
    citebox: "popupTempDetector",
    image: "assets/images/project-page/minesweeper.jpg",
    citation: {
      vancouver:
        "Vansh Rana. Temperature Detector using Python. Personal Python Project, 2024."
    },
    abstract:
      "Developed a Python-based temperature detector that captures and analyzes temperature data using external sensors or simulated input. Useful for basic IoT and automation tasks.",
    absbox: "absPopupTempDetector",
  },

  {
    title: "House Price Prediction",
    authors: "Vansh Rana",
    conferences:
      "Personal Machine Learning Project",
    researchYr: 2024,
    citebox: "popupHousePrice",
    image: "assets/images/project-page/battery.png",
    citation: {
      vancouver:
        "Vansh Rana. House Price Prediction using Python and Machine Learning. Personal Machine Learning Project, 2024."
    },
    abstract:
      "Built a regression-based machine learning model using Python to predict housing prices based on input features like location, area, number of rooms, and amenities.",

    absbox: "absPopupHousePrice"
  },

  {
    title:
      "Object Detection",
    authors: "Vansh Rana",
    conferences:
      "Personal Deep Learning Project",
    researchYr: 2024,
    citebox: "popupObjectDetection",
    image:  "assets/images/project-page/movie-recommendation.jpeg",
    citation: {
      vancouver:
         "Vansh Rana. Object Detection using TensorFlow. Personal Deep Learning Project, 2024."
    },
    abstract:
       "Developed an object detection system using TensorFlow that can identify and localize objects in real-time from video streams or images, leveraging pretrained models and deep learning techniques.",
    absbox: "absPopupObjectDetection"
  },
  {
    title:
      "Behaviour Detection",
    authors:
      "Vansh Rana",
    conferences:
      "Personal Machine Learning Project",
    researchYr: 2024,
    citebox:  "popupBehaviourDetection",
    image: "assets/images/project-page/tic-tac-toe.png",
    citation: {
      vancouver:
        "Vansh Rana. Behaviour Detection using Python. Personal Machine Learning Project, 2024."
    },
    abstract:
      "Created a Python-based behaviour detection system capable of analyzing input patterns to classify or interpret behavioral trends, potentially useful in surveillance or activity recognition scenarios.",
    absbox: "absPopupBehaviourDetection"
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
