import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
export default function App() {
  const [isOnline, setIsOnline] = useState(navigator.onLine);

  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      makeApiCall();
    };

    const handleOffline = () => {
      setIsOnline(false);
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    // Cleanup listeners on component unmount
    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  const makeApiCall = async () => {
    const URL = `https://new.compaksa.co.za/wp-json/gf/v2/forms/9/submissions`;
    const data = JSON.parse(localStorage.getItem("offline_data"));
    console.log("data=> ", data);
    try {
      const response = await fetch(URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        toast.success("score uploaded successfully", {
          position: "top-right",
          autoClose: 2000, // Correctly set autoClose to a numeric value
        });
        localStorage.clear();
      }
    } catch (error) {
      toast.error("Failed to upload score", {
        position: "top-right",
        autoClose: 2000,
      });

      console.log("error =>", error?.message);
    }
  };

  const submitForm = (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);

    const data = {};

    formData?.forEach((value, key) => {
      data[key] = value;
    });

    if (isOnline) {
      alert("you are online please input score from wp_admin");
    } else {
      localStorage.setItem("offline_data", JSON.stringify(data));
      toast.info("You are offline! data stored successfully", {
        position: "top-right",
        autoClose: 2000,
      });
    }
  };

  return (
    <div>
      {isOnline ? <p>You are online</p> : <p>You are offline</p>}

      <form onSubmit={submitForm} id="sb_form">
        {/* <!-- row 1 --> */}
        <div class="form-field event_id">
          <input
            type="text"
            name="input_12"
            id="input_12"
            class="gf-input"
            placeholder="eventId"
          />
        </div>
        <div class="performance_wrapper">
          <div class="row">
            <div class="form-field">
              <input
                type="text"
                name="input_13"
                id="input_13"
                class="gf-input"
                placeholder="Enter player email"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_8"
                id="input_8"
                class="gf-input"
                placeholder="Range 1"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_7"
                id="input_7"
                class="gf-input"
                placeholder="Range 2"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_3"
                id="input_3"
                class="gf-input"
                placeholder="Range 3"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_6"
                id="input_6"
                class="gf-input"
                placeholder="Range 4"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_10"
                id="input_10"
                class="gf-input"
                placeholder="Range 5"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_11"
                id="input_11"
                class="gf-input"
                placeholder="Range 6"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_9"
                id="input_9"
                class="gf-input"
                placeholder="Range 7"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_5"
                id="input_5"
                class="gf-input"
                placeholder="Range 8"
              />
            </div>
          </div>
          {/* <!-- row 2 --> */}

          <div class="row">
            <div class="form-field">
              <input
                type="text"
                name="input_14"
                id="input_14"
                class="gf-input"
                placeholder="Enter player email"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_16"
                id="input_16"
                class="gf-input"
                placeholder="Range 1"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_15"
                id="input_15"
                class="gf-input"
                placeholder="Range 2"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_17"
                id="input_17"
                class="gf-input"
                placeholder="Range 3"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_18"
                id="input_18"
                class="gf-input"
                placeholder="Range 4"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_22"
                id="input_22"
                class="gf-input"
                placeholder="Range 5"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_21"
                id="input_21"
                class="gf-input"
                placeholder="Range 6"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_23"
                id="input_23"
                class="gf-input"
                placeholder="Range 7"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_24"
                id="input_24"
                class="gf-input"
                placeholder="Range 8"
              />
            </div>
          </div>

          {/* <!-- row 3 --> */}

          <div class="row">
            <div class="form-field">
              <input
                type="text"
                name="input_25"
                id="input_25"
                class="gf-input"
                placeholder="Enter player email"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_27"
                id="input_27"
                class="gf-input"
                placeholder="Range 1"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_26"
                id="input_26"
                class="gf-input"
                placeholder="Range 2"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_28"
                id="input_28"
                class="gf-input"
                placeholder="Range 3"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_29"
                id="input_29"
                class="gf-input"
                placeholder="Range 4"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_31"
                id="input_31"
                class="gf-input"
                placeholder="Range 5"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_30"
                id="input_30"
                class="gf-input"
                placeholder="Range 6"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_32"
                id="input_32"
                class="gf-input"
                placeholder="Range 7"
              />
            </div>
            <div class="form-field">
              <input
                type="text"
                name="input_33"
                id="input_33"
                class="gf-input"
                placeholder="Range 8"
              />
            </div>
          </div>
        </div>
        <div class="form-field">
          <button class="sub_btn">Submit</button>
        </div>

        <div id="gf-message"></div>
      </form>
    </div>
  );
}
