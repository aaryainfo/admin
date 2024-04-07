import React, { useEffect, useRef } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { toast } from "react-toastify";
import AdminHead from "../Components/Admin/Adminhead";
import AdminSidebar from "../Components/Admin/Adminsidebar";
import {
  getBlogWithId,
  updateBlogList,
} from "../../src/services/admin-auth.service";
import JoditEditor from "jodit-react";
import {
  getCustomerWithId,
  updateCustomerList,
} from "../../src/services/customer.service";

function AdminUpdateCustomer() {
  const navigate = useNavigate();
  const editor3 = useRef(null);
  const { id } = useParams();

  // add product states
  const [fullname, SetFullname] = useState("");
  const [email, SetEmail] = useState("");
  const [contact, SetContact] = useState("");
  const [message, SetMessage] = useState("");

  useEffect(() => {
    getCustomerId();
  }, []);

  async function getCustomerId() {
    try {
      const payload = { id: id };
      const getCustomer = await getCustomerWithId(payload);
      const data = getCustomer.data; // await res.json()

      SetFullname(data.fullName);
      SetEmail(data.email);
      SetContact(data.contact);
      SetMessage(data.message);
    } catch (error) {
      console.log(error);
    }
  }

  async function updateCustomer() {
    try {
      if (!fullname) {
        toast.warn("Please fill the required field");
        return;
      }
      if (!email) {
        toast.warn("Please fill the required field");
        return;
      }
      if (!contact) {
        toast.warn("Please fill the required field");
        return;
      }
      if (!message) {
        toast.warn("Please fill the required field");
        return;
      }

      let formData = new FormData();
      formData.append("id", id);
      formData.append("fullName", fullname);
      formData.append("email", email);
      formData.append("contact", contact);
      formData.append("message", message);

      let payload = {};

      for (const pair of formData.entries()) {
        const key = pair[0];
        const value = pair[1];

        if (key === "images") {
          payload[key] = [value]; // If you want to include the entire array
          // If you want to include each value of the array separately:
        } else {
          payload[key] = value;
        }
      }
      // payload = {...payload, "images": ["data:image/png;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBwgHBgkIBwgKCgkLDRYPDQwMDRsUFRAWIB0iIiAdHx8kKDQsJCYxJx8fLT0tMTU3Ojo6Iys/RD84QzQ5OjcBCgoKDQwNGg8PGjclHyU3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3N//AABEIAJQAlAMBEQACEQEDEQH/xAAbAAAABwEAAAAAAAAAAAAAAAABAgMEBQYHAP/EADkQAAIBAwIEBAQEBAUFAAAAAAECAwAEEQUhBhIxQRMiUWEUcYGRMqGx0RUjM1IHQoLB8BYkQ3Lx/8QAGwEAAgMBAQEAAAAAAAAAAAAAAgMAAQQFBgf/xAAwEQACAgEEAQMCAwgDAAAAAAAAAQIDEQQSITFBBSJRE2EycfAUI0KBkaGxwQYk0f/aAAwDAQACEQMRAD8AYk1CBDVkOqEOxVEBqEOqyAVCBSpJCjcnoKvZJ+CEsmieDGrXkpQkZ5FXmP8Atin16eUhFl0YcDYDTFHS4KjqyupP2wP1rQ9DL5Mi9Qg+cAC2inUmyuBK+f6JBEmPl3+QJrNZp5w7Rpq1NdnTG2Dv6jqKQaQ8A/mChYcOyx6cNhSGbYE3B0FLHIfR9KhYeoUBUIdUIZea2HJAqEOxUIGAqEBIqEGGr6jDpdoZ5dz0RO7N6UUVkpsoOo65f3zktO0aE7Rx+UD7dfrTspdAkbv171X1Gi8Etp/EWo2SCFbqVoR/kLHA+X7dKbC/xIB1p8l24cvrfU7WcxOBLzFjGeqg/wC1dONilFYOPbp3CTAu4+RitaYcmBxcWIy6xNbnmu0EgdgPFLYY/Ptn39t81i1OkgpbmsJnZ0mqlKO3tol9PuI7g5Q7jqDsRXO1GmlWt3a+TpU2Kb+/wWiwHSubI6MCag6CljkPY+lQsPUKAqEOqiGYGtpyTsVCAgVCBwKogDCqyQpXHyyePZk/0uVsenNnf8sU6L4BZVVG2ajZEdgtsoyaEsUSzmc4VST3wM4qt6L2SfgcWxvdNuBJErrIp7A7+xp9Wo2+QZUt8NEsNRvnX4i1unkUfjhm8xj+++PeutprN6zCX8jFdpqn+KInqWqNdWyRTWoDB+ZiDsRjtWyUtySlETRplVNyjIeaXqEr2/iqxEtiyqzf3RE7Z+R2/wBQrBCyMZy08l7XnBucXxYu12axpbrNCksbq6MMhl6EV56yLjJpnXhysomoegpTHIeR1RYpUKAqEydg1eCsmZYrWco7FQgYCoQMBQ5ICRQlkbrmmJqdi0DYD/ijf+1v2o4vBWDNLq3mtZ3tpoysynHLTMlYNL4W4PihsY3ukDTuAWyOntXNtublwdaqmMIrJa4tKt4IgqQxj/SKXlh4RGatpsAiJKJzY2wKDc0OilgzvVrd7a5MsGFcZHTYj0PqK36XUSreUzFqaFMZ86SxmSNeXH4485Ke49RXqdPq43L7nDtplBh9OMcN8pkJEEw8GYDpyt6/lS9ZXwrYdrkPTT52y6Zd+B9U+Cu/4ZcP/LLlEYno2dvvWbX0K6pX19mnS2fTn9KZpMVefZ1R5H0qiB6hAyrmiSAbFQvtRYFuRllaDACKhAahA60DIGxVFhWFREGZ0Ky1TVbF7nlQwyBzISB5Qc4PtmpKXtDgvci88toYwIZEJG2zZ3rBKJ1IybCXM1nbhfGuEVu4LgUW3JWcdkVc3FpdnEdxFyjqTIKF1yyMjbFeSHu+H7e6Ykts3+ZWzVe6LDajJGd69YnTtV5IJTldlyOo/aunppyiso5OpinLA3tZFuDJDIgRgCCvtXoNPqFdHbLswShtY6Sd44UkJIkUGMnvzJ0P2xQ6WWN1UvBVyziaN5tZPEVHByGQN9xXmZrDwd1PKJCMbUOCZFlWrwA5CqrimJCnIPiiwLcjJwaYZgc1CAg1CAg1TIG56Es4tVFoJcLI1lctb2q3MqqFVG6bnGaCfgdSstkHw1oesTa5b8oe3iSXzNG5wEG7EZzkemftS5pSjwzXVmD5QPHWjSrrQksZJ5mkGXLtsN+1BXLHAy2G7lEVb6dq1tHzG0tnD9fEOfvv8vvTt0X5M305J/hJ3hPUrhJ2tf4dJCp3ZVUlAfUdqVYjRVxxjA/4m4civovjowVuIRzY7MB1FVCxx4LtrUufJmV2xW4E8IwynIGOorp02uDTRzLI5HtwvxColtuZ2jeMe7BlI+4Wuj9aLtdi8rJn28bTebCHwI44QSfCjVM+uBiuBJ7m2dhcRwTEK7CrSAkxcLRYFNhwKJIU2dRAmR5ohR2ahAc1CAhqogbNUQ7NUXkufBFlHJptzcSKCZH5N/QD9yaCSyOrymSFydO0y2lPjRRufKxOAR7Un2pYNkVOTzggJXt/ibZ5FV1dsJJsQaHCG5ZOfwywaPmeJCD2Io9qFbpDVltLfPhRRrjbYVXBfJGatLGtjcSbYEbfpVJBbjKdK0q1uNOl1a+fEAlKcjHC57An03p05yi8ITTVGxOUi06JbvqGtWdvfmK4t0iW5hKRqBE6t+FSAPL5dwfbvvS4XyXRrt00du74NKgXzZ7mrQhklENqYhEmLAUQtsGiQtnVYJj+asWdzVCHc1QhwaqIGDVRYIOahC8cKSmPh4nOFEr5J+lJsbRrpSfZnfF8Mmo394+ktf3MMjgysuSiPjzFfbGPrQxio/i7HOyUvwrgjeFHMUyW+oajJBEHD+HMTuw9CTtRSjnlAws2LbI1H4wPaDwJQ6kbNnrQNNDVJMjudlJMj5PpmhwwnJFX411gQ6eYLVgzTAhiOwptUeciLp4XB2kac78NRaYyR8ty/PJzb8owMfXIH50uyfuNGng1DknOEdLW2mV8P/LgEY5gR8z9STtQxXORtssR2lzgG9NRml0SMY2piM7DiiFs41aAYFWCY5mrAAJqEOzUIdmqIGBqEDg+9QgTUNensNEv9PjZh43K8ZBwfN5SPy/OqwsobGTUWkIRaLAttFFqHFUFuUUc0Cnl5dum5yTWaTi3nB1KU1BRUsEbqWm6XNzLacQNcuu6hkyCfbH70UJY5wLvUZLG7J3DOsSafLcWt7IeULlAT3z2p0kmsowwk4tpji6v57iTKz4VGLABvXpigxgPLZE3U8c8itJKSQ2FUb8xqN4XBaSfZZYdTl4ZEKXqfEfFqoiVTghgOm+AB7+9ZknOXB0XKFVaUuy76DLLNZpLdQNBM+7xnflPz9KdjBn3ORNwkZG9UiS6JCPpTUZ2HFELZxq0AwKsoxs1YsA1CAVCgRVEDCoWHFQhX+LkcfCTIWzz8px9xRJFN4FuSxu4oX1DzyheZsEDO/f1pO3HRqypLLGt3/CxyjTkkS4Jwc9h/wDe9Xh+SnJeCuXc8iyHnY+J3J/SmpLAiTbfIVbxmG7Yx70thRZLaNp9zqF3E045YgQRjYtSLbFFYRtoplN5ZdNVt7a51/S/HlX/ALa0ll5Nt+Ur0+mT8gaCniL+4/UrMl9iYfia2i28RR7ZFP2MQrF5Hmn8U2srhfFTPzFBtaG7oyXDLXY30c6gowPyo48meS5H4aiFsGiQDAzVgmNmiFhahR1TBARUwQOKosMKognd2sd5A0Eq8wb8vf2q84WWWouTwihTJMkkptne6ggfHiKp5SBjJ657ii2PbuYTTT25yR7SsGblZ9/X0pZNrfgKA8h75qOSRcapN4JKwtY0YPIAzZzgjas87G+jbXp1Hllo0y9WFjK5HlGwpEk2a65KJXdW1u4/6gi1GJv5luwKDt16fIjY1qrh7HExX2tWKS8F61i00u/4Ll1m3giSSVA8LRqFZWzurY2J2IodP9VW7JMdqo6eVP1ILDM+SVk3DEEdCDWxo5mWui1cJ8W3FhdJDcyl4WIGWP4arYi97No026FxArg5BHWlNYGxeUSFRMpoAiiBMcNGJAqEOxUIDUIGFQsMoZmCqCSegAq1FvonQw4mna2sBYQsDfXnlZFbeGPvzY6E+np9a1aXQ2X3Ykvav7sc7oUVOefc/wCww4Pjjm16e0C81ulhIgBHXzJk/Mk5qesL6SUEDoHvnka8Q6O1vMSi4Ud8Vw42HZcHjgryIQ/TenNiUsMlLKF5MELt3pLeBii2OLiNljKjNFDlgTjhEHdQ8r79TXb0Gidy3y6OXfNR48lm0vUXXhiy0tR1v5JiT0CBAMH6sdq6lWiS1TbXDQuV+zT4+4xuNPtrqY/BMICfwxuSVb5Ht/zpV6n0nHuqf8jJXqk3hkVNBPayctxG0bHYE9D8j0NceyqdbxJYNMZKS4Nv/wAPL03ekQliSQuDn2rHPs01rguy9KAJoGiAaMcxTBIFQoEAmoWKxQSTbRIze4G336UyFU5/hRTkl2GeJYT/ADZFz6A11KPTcrNjM89TjiISfUvBtZDCxGOypygn3J3NdOrSwhxFGaVjl2ys2tuY4Z7mUZmkzufU962YS4RSTmS3DOnPp+q6feSAj4+OVV/9fIV/Rj9RXh/WNVG3UShH+HB6bQ6WVcFN+c/6LVq+m+LG4KBvnXElk6cGiqLwyXmLeEBV75YwE4wyGk0ieM8saDHr2oosGWPAL6V4VpcXlwuYbdMsOnOx2Vfuftmt2hrV+pjT8mbUNQrciDnh0eewg+HE/wAc/mnkbJVDjdR6gnf29a93VXOt442o8xZZl/djUXFlGsMcc8hEYbxD4f4ubHTfbpVQtk7HJIuyKcFENaeA7NzTt5d15UOM++d/tWtSlLpcGWUVD8yR8VHyknLNGeqsMqfvQ20wtjiaM8bZQllF14C1CwsT8IXMKscrznI+/wC9eZ13pk68zq5X9ztaXWQmtsuGaUhGARuMdRXGNrQbNWA0Y7inIzAAZNFGLk0kUKvJDb4UBZZe+d1X967mm9NjFbrOzLZf4iI3t9MbcbnKj8C9vp2rqVUxTwjFdY12QzX8jwyJhlZhgMDWn6aQre/AwsrqSKWWKdZJMnqXyRj50EoS/hNcZQSzIe8NTDWNahsL0LbW5yxdnA5gN8Z9SM1xNdrNZp6LJ/Ty0njHz4N+nhTKSSZqZW0lIaIQukeAnIQeX5dce1fPdF9ajM71ly7z/U9MoRuioxl18HW7x3atgHmHVcYPzrXHE+UDbCVOExZrZQuOUYotgveMbz4K3OLqWNMgnkLYJA6/Sl7pN4gsjo4Ud03hFV464h0xNBis7C7tpZJGDMluwfC4J3x03xW3/jlN1fqNmpvi0kml/XH+Dn+oXQlVsrfZmwku7lPDXm5B0VNvvXt19W589HDbjBDy2sZQQWXl+ddCqpxMdl8R5hMbk/MdRWgQmxWB1IIGzL+dCypR8i6SlWBzQtC4vDLLofGF5prqnOZYB1jc5H09K5eq9MquWemdKjXSg8PlGmaXren6jZrcRTogOxWRgGU+leZu0l1U3Fo68LITW5MzA9KFGYb6zIbPSgw/qXEiInsmfN9+nyz612/TdNzvkIun4Eg2PPnzHOM+9dpIxNkas0iylJt/en4WODM18nMrc/MRnB2NWJ3JMExqX5gME9feoU5tic9tG4JCjmx1qnyXC2SI5YriC+8eznltpP7omwT8/X5Vz9Xoa9Qvcjq6XVSg1tZfeGdWuLyB3nULc2z8pcbK+wOfYH07V4HXaOWh1O1dPo9xpNTHW6V7+1+sheIuOraENbQXhjceVzbxiSX5DJCr98+1PjpLrOUsHOjqdNS3uzL8uihalqUmrgwWtvJFEzZkkllMkk3pzN6d8evyrsaD0qUXuZz9f6p9VYwoxXhCraPYR2FrJBPI92QxuEK4VPTBxvXZ0ulthZL6iW1dP5ORbqYtLY+SblTTJ57OHTA9nEyKk0t0/l5+7YHQf8xWun9pqrnK33Pwl8Gaz6dk0o8fORhqAjhu5Yre4S4SJyqzICFceoFa6pynBSksN+BbrUZbU8jJtyfemFhV2cHvVMt9YFi+Bk7AULAUchGkPIH6AnAz3oMhqA7tr6WKIKCfvQyhGTyxsZyisIsxZF80n4F3b5V5DSU/VtUTpWS2xyR3EUhumgB/yyCvU0QwsHOnJ5yJSHcEnAxtTkhMnljWaSMnORmjQqWX0W3/AA+0qx1ue9g1K3aQRxBo2EjJyknHYjP1rmep6m2iMHW8ZY7SUV2OW5Fgh4W0+xbQrKWwS6u7h2N1IXYqAoPMNjjAJA+lc96+2xWTUsJLhcGhaWEHCO3LfZ2hWek3d8xg0u1maytpRcssZMRl5hyIOfbmwG37dKHUWaiNaU5v3NY+cY5fAyqurdmK6M612xnsdTEd08D3MiLNMsGOWNm3K7bbe23pXe09kbYZjnC4WfsZLIuufI0vL2Y6auk2LENcSGS4ddsJgKFz9CT9K59+hjqNWrGulg6cda6NLtzjPZHx6VErLtkL6966ENLXHGF0cqWrk0T/AA9pMV7emJz4UKIZJnCFuRBjJwAT3FL1d/7PVuist8L8waYSvnhvjyX/AETTZZ4Q+jWlvbxJyr40gBLMpznJGdzjbpsPevL6m6Kl/wBmbbeeOfJ16oLH7pcDTVdMXUHuLDUIUS8jVminQKpyDzYJ7jfAA9emwxooulptttLzB9p5/X8wLIRtzGS5MymyX369x7165dcHKSwJhWJwBVl5FEhDDBG4qAueAvgl+aSY8sMe596XJ/I2DS4XbGSzNcSGZhhOiLSa5OfufXgfOO1bUPEVioOcUwWT2tT+DYSMfwkqrH0BI3+9ed9LWJuTN93K2jFpy6K0mM9Tj1HX9K9AlhnPkxISmbAG9MRmk/kcW8CfiIyR2qMzzsfROWOvyaPamK3aRQ9wkkyryjnRd8c2CQc9xWO/Sxvnul8cfmN090oxxH5G8vFWoSQ8njXA5ZMxsLlwUj28nqRt16n6UK9PrTz9uePPya/2iTWP9kRd6g101yqRRxQ3Dh2jRdlxnAH3rTGlR2+WgN+M+BprF/PJMZHIe6mwo5QB0AA2HsKGWKYKEA4J2yc5dIc2MK20TSOd8AcxpkI7UZNRY7Z4QDyhGONx296bkpQyiw8H3UIvp7aV0jN3AY45WZl5WyDg4zkYzsRgkDpXJ9XhJ1xsjzteX54N3p8lGbg/JeLHXn0e1NpcafKZI3HIoJDHnJOMYJ23674xXm7tJVqpKzd+kdONsqo4wQurao9q9zq97hZposWsO2XyeU98ry469Tg1s09SvcdPV0n7n8Y5X55FWS+nmyX8jPfCEoLDPMO5r1+TjObi8MOsCLuTg42qAOxsUKjO2M1YOSK1qY/DxwIceLIcj2GKyalviK8m/Sx53PwNAyhkXsv61eUmkhrT5Y9SQBRTMCslh1WMT2UkB/8AIMfbeuL6bX+6b+TXfLEvyK0botpqZ2lTKP8AMbV04TzDntcCZQ/efZhtMkeWY+bCKBze1NhLLEaiKjH7kwkw5GFuuw6u1MwYHDlbxrIcZaZvMPWrwxy54iJxq9yrPFl0T8XKM4+fpVOSi8Mc4OK6FomiSNuYDYdKsTJSk1gRsIQbn4iY80gUso/tFLUfduYd03s2R6FpZADyoRj0LE0YEI+WMfEBcpkbH7VEaNuFkXjkOMjqN/lVvD4FNYZK2vEGr28SQQX0yIo8oBG23LnOOuNgeo2xWCz0vSWS3yrTZojqrksKQ3eaW5mMt1I8suMFnYkkf8JrXXXCuO2CwvsZLJyk8yeQoHh59KYA3uEZ+R0I69qvwHBNMiZLqS3kCc2Uz37UiVjrfPRujVGyOfI2u52nuQxOeUUiye63PwOrgoQwJI7NJhQCTsPalqbcuA3FJcjwkjbPTatnRnST5LfqJIhBHUHP51z9AsaeP68jbvxlPvwI7qdU2VowxHvnFOnxZJL4yDT7oRz8htOYiQoD5Xbze9Oq8gXpNJk7Yfzb+zgb+nJMgYDuCwBptsnGLa+GYoQUnybm2j6Vp9vI9rpdmpjxjMIP5nevF/tF1jzKT5PQQqhFqKQGvysnC2pFAqj4KXCqNh5D2q9Os3x/MuyK2tFA4XtrGHg6LUn06zuLp7h1Z54+bYFsfpXY1llktU4bmljwYaoxjUnglb7Q9L/gGqajHZRRTy6Yzt4eyhl84IHbcD7Vnr1dyuhByyt3/i/2FKqDi+PBW9biTTv8PdEgtVCrfym4uCRkswG2/p+1dSjNmvscv4VhCbeKUkS1nbW02o8BRy20Lq1g0jBkB5j4QO/ruSaxWSko6nD8r/LNKSzFEFwTpdlqnEt5BewB4UgmkWMEgAhgB09Mmt2tvsp0sJwfLx/jJlrrjOySf3H1xw1p4s+GWTxUfUC3juH3PfbOwpUddbvu6xHoB0w2w+404w0S20W5hS0eVlkQsfEIOPlgCtGg1U9RFufgz6mqNeMFWklcMFB2NdACEEyHkvJ1LANsx3rJZdKPKOjGmDxlDeeVpoyz4zntS7JudeWHCCi8Ibr0c96w1yfuY2S6Fbb8Sj1Iz961afwBPpjmckSECtc+xEOj/9k="]}

      console.log(payload);
      const customerList = await updateCustomerList(payload);
      const data = customerList.data;

      if (data) {
        toast.success("Customer Updated Successfully");
        navigate("/admin-customers");
      } else {
        // if (Object.values(data.data).length > 0) {
        //     toast.warn(Object.values(data.data)[0][0])
        // } else {
        //     toast.warn(data.message)
        // }
      }
    } catch (error) {
      console.log(error.message);
    }
  }

  return (
    <>
      <div className="AdminDashMain">
        <AdminHead />
        <div className="AdContent">
          <AdminSidebar />
          <div className="adRightContent">
            <div className="pathSec">
              <div className="title">Update Contact</div>
              <div className="path">
                Admin &gt; Contacts &gt; <span> Update Contact</span>
              </div>
            </div>
            {/* add tag form */}

            <div className="formDiv">
              <div className="row">
                <div className="col-lg-8">
                  <div className="formTitle">Update Contact</div>
                  <div className="form">
                    <div className="inBox">
                      <div className="inTitle">
                        Name<span className="req">*</span>{" "}
                      </div>
                      <input
                        type="text"
                        name=""
                        value={fullname}
                        onChange={(e) => {
                          SetFullname(e.target.value);
                        }}
                        className="inText"
                        placeholder="Enter name"
                        id=""
                      />
                    </div>

                    <div className="inBox">
                      <div className="inTitle">
                        Email<span className="req">*</span>{" "}
                      </div>
                      <input
                        type="text"
                        name=""
                        value={email}
                        onChange={(e) => {
                          SetEmail(e.target.value);
                        }}
                        className="inText"
                        placeholder="Enter email"
                        id=""
                      />
                    </div>

                    <div className="inBox">
                      <div className="inTitle">
                        Contact<span className="req">*</span>{" "}
                      </div>
                      <input
                        type="text"
                        name=""
                        value={contact}
                        onChange={(e) => {
                          SetContact(e.target.value);
                        }}
                        className="inText"
                        placeholder="Enter contact"
                        id=""
                      />
                    </div>

                    <div className="inBox">
                      <div className="inTitle">
                        Message<span className="req">*</span>{" "}
                      </div>
                      <div className="row ">
                        <div className="col-lg-12">
                          <JoditEditor
                            ref={editor3}
                            value={message}
                            tabIndex={1} // tabIndex of textarea
                            onBlur={(newContent) => SetMessage(newContent)} // preferred to use only this option to update the content for performance reasons
                            onChange={(newContent) => {
                              SetMessage(newContent);
                            }}
                          />
                        </div>
                      </div>
                    </div>

                    <div className="formBtns">
                      <button
                        className="add"
                        onClick={() => {
                          updateCustomer();
                        }}
                      >
                        Update Contact
                      </button>
                      <Link to={"/admin-customers"}>
                        <button className="cancel">Cancel</button>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AdminUpdateCustomer;
