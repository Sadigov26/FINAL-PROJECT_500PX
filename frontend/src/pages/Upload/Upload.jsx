import React, { useEffect, useState } from "react";
import styles from "./Upload.module.scss";
import { MdDelete } from "react-icons/md";
import axios from "axios";
import Header from "../../components/Header/Header";
import { useFormik } from "formik";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Upload = () => {
    const [data, setData] = useState([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const getData = () => {
        axios
            .get(`https://664c587c35bbda10987ff83d.mockapi.io/Basket`)
            .then((res) => {
                setData(res.data);
            });
    };

    useEffect(() => {
        getData();
    }, []);

    const deleteItem = (item) => {
        axios.delete(`https://664c587c35bbda10987ff83d.mockapi.io/Basket/${item}`);
        setTimeout(() => {
            getData();
        }, 500);
    };

    const formik = useFormik({
        initialValues: {
            thumbnail: "",
            title: "",
        },
        onSubmit: (values) => {
            setIsSubmitting(true);

            axios
                .post(`https://664c587c35bbda10987ff83d.mockapi.io/Basket`, values)
                .then(() => {
                    setTimeout(() => {
                        getData();
                        formik.resetForm();
                        setIsSubmitting(false);
                        toast.success("Image uploaded successfully!", {
                            position: toast.POSITION.TOP_RIGHT
                        });
                    }, 500);
                })
                .catch((error) => {
                    console.error("Error:", error);
                    setIsSubmitting(false);
                    toast.error("Failed to upload image!");
                });
        },
        validate: (values) => {
            const errors = {};

            if (!values.thumbnail) {
                errors.thumbnail = "Required";
            }

            if (!values.title) {
                errors.title = "Required";
            }

            return errors;
        },
    });

    return (
        <div>
            <Header />
            <ToastContainer />

            <div className={styles.Dashboard}>
                <div className={styles.dashboardContainer}>
                    <div className={styles.dashboardContainerTitle}>
                        <h3>
                            Upload photos <FontAwesomeIcon icon={faUpload} />
                        </h3>
                        <form
                            onSubmit={formik.handleSubmit}
                            style={{ display: "flex", flexDirection: "column" }}
                        >
                            <div className={styles.inputDashboard}>
                                <label htmlFor="thumbnail">Image URL:</label>
                                <div style={{ display: "flex", alignItems: "center",width:"80%"  }}>
                                    <input
                                        id="thumbnail"
                                        name="thumbnail"
                                        type="text"
                                        placeholder="URL"
                                        onChange={formik.handleChange}
                                        value={formik.values.thumbnail}
                                    />
                                    {formik.errors.thumbnail ? (
                                        <div className={styles.error}>{formik.errors.thumbnail}</div>
                                    ) : null}
                                </div>
                            </div>
                            <div className={styles.inputDashboard}>
                                <label htmlFor="title">Title:</label>
                                <div style={{ display: "flex", alignItems: "center",width:"80%" }}>
                                    <input
                                        id="title"
                                        name="title"
                                        type="text"
                                        placeholder="Name"
                                        onChange={formik.handleChange}
                                        value={formik.values.title}
                                    />
                                    {formik.errors.title ? (
                                        <div className={styles.error}>{formik.errors.title}</div>
                                    ) : null}</div>
                            </div>
                            <button
                                type="submit"
                                className={styles.submitButton}
                                disabled={isSubmitting || !formik.isValid}
                            >
                                {isSubmitting ? "Submitting..." : "Submit"}
                            </button>
                        </form>
                    </div>
                    <div className={styles.dashboardContainerBottom}>
                        {data &&
                            data.map((item) => (
                                <div className={styles.dashboardCards} key={item.id}>
                                    <img src={item.thumbnail} alt="" />
                                    <h3>{item.title}</h3>
                                    <button
                                        style={{
                                            display: "flex",
                                            alignItems: "center",
                                            gap: "10px",
                                        }}
                                        onClick={() => deleteItem(item.id)}
                                    >
                                        DELETE <MdDelete />
                                    </button>
                                </div>
                            ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Upload;
