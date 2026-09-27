/* =========================================================
   BEAUTY BUFFET SALON GH — FRONTEND
   =========================================================
   Features:
   - Salon appointment booking
   - Clicking a Hair/Nails/Makeup variant opens the
     salon appointment modal with that exact variant selected
   - Home service has its own separate modal
   - Product ordering
   - WhatsApp submission behind the scenes
   - Service image sliders
   - Stylists
   - Gallery
   - GSAP animations
   ========================================================= */

const HOME_SERVICE_MULTIPLIER = 1.25;
const WHATSAPP_NUMBER = "233264174992";

const SALON_LOCATION = "Agbogba, Accra, Ghana";

/* =========================================================
   SERVICES DATA
   ========================================================= */

const servicesData = {
    Hair: [
        {
            name: "Micro Twists, Starter Microlocs & Root Locs",
            images: [
                "img/Micro Twists1.PNG",
                "img/Micro Twists2.PNG",
                "img/Micro Twists3.JPG",
                "img/Micro Twists4.JPG",
                "img/Mirco Twists5.PNG",
                "img/Micro Twists6.PNG",
                "img/Micro Twists7.PNG",
                "img/Micro Twists8.PNG",
                "img/Micro Twists9.PNG",
                "img/Micro Twists10.PNG",
                "img/Mirco Twists11.PNG",
                "img/Micro Twists12.PNG"
            ],
            description:
                "Begin your loc journey with a lightweight and elegant foundation that naturally matures into healthy locs.",
            benefits: [
                "Lightweight & versatile",
                "Low maintenance lifestyle",
                "Healthy growth retention",
                "Long-lasting elegant look"
            ],
            timeline:
                "Mature microlocs typically form within 9–12 months with proper maintenance.",
            variants: [
                {
                    length: "Temporary Micro Twists",
                    price: "₵450 – ₵600",
                    duration: "4–6 hrs"
                },
                {
                    length: "Permanent Starter Microlocs",
                    price: "₵1000 – ₵2000",
                    duration: "6–8 hrs"
                }
            ]
        },

        {
            name: "Micro Sengalese Twists",
            images: [
                "img/microsenegalesetwists1.png",
                "img/microsenegalesetwists2.png",
                "img/microsenegalesetwists3.png",
                "img/microsenegalesetwists4.png",
                "img/microsenegalesetwists5.png",
                "img/microsenegalesetwists6.png",
                "img/microsenegalesetwists7.png",
                "img/microsenegalesetwists8.png",
                "img/microsenegalesetwists9.png",
                "img/microsenegalesetwists10.png",
                "img/microsenegalesetwists11.png"
            ],
            description:
                "Experience the beauty of our signature Micro Senegalese twist Our unique and affordable braiding style is like a fine wine. It only gets better with time. Enjoy a lightweight, pain-free, and washable hairstyle that can be kept on for 3 months.",
                            benefits: [
                "Lightweight & versatile",
                "Low maintenance lifestyle",
                "Healthy growth retention",
                "Long-lasting elegant look"
            ],
            timeline:
                "Mature microlocs typically form within 9–12 months with proper maintenance.",
            variants: [
                {
                    length: "price",
                    price: "₵850 - 1200",
                    duration: "7-9 hrs"
                }
            ]
        }
    ],

    Nails: [
        {
            name: "Gel Manicure & Pedicure",
            images: [
                "img/Micro Twists1.jpeg",
                "img/Micro Twists2.jpeg",
                "img/Micro Twists3.jpeg",
                "img/Micro Twists4.jpeg"
            ],
            description:
                "Luxury nail care with a long-lasting gel finish.",
            variants: [
                {
                    length: "Standard",
                    price: "₵120",
                    duration: "1 hr"
                }
            ]
        }
    ],

    Makeup: [
        {
            name: "Glam Makeup",
            images: [
                "img/Micro Twists1.jpeg",
                "img/Micro Twists2.jpeg",
                "img/Micro Twists3.jpeg",
                "img/Micro Twists4.jpeg"
            ],
            description:
                "Full glam makeup for events, weddings and photoshoots.",
            variants: [
                {
                    length: "Full Face",
                    price: "₵250",
                    duration: "1.5 hrs"
                }
            ]
        }
    ]
};

/* =========================================================
   PRODUCTS DATA
   ========================================================= */

const productsData = [
    {
        id: "product-1",
        name: "Beauty Buffet Hair Care Bundle",
        price: 180,
        currency: "₵",
        sizes: ["Small", "Medium", "Large"],
        description:
            "A salon-ready hair care bundle designed to keep your style moisturised, fresh and easy to maintain.",
        images: [
            "img/Micro Twists1.jpeg",
            "img/Micro Twists2.jpeg",
            "img/Micro Twists3.jpeg"
        ],
        badge: "Featured"
    },

    {
        id: "product-2",
        name: "Luxury Hair Treatment",
        price: 120,
        currency: "₵",
        sizes: ["250ml", "500ml", "1L"],
        description:
            "A nourishing treatment for softer, healthier-looking hair between salon visits.",
        images: [
            "img/Micro Twists2.jpeg",
            "img/Micro Twists4.jpeg",
            "img/Micro Twists1.jpeg"
        ],
        badge: "Hair Care"
    },

    {
        id: "product-3",
        name: "Beauty Buffet Styling Essential",
        price: 95,
        currency: "₵",
        sizes: ["Standard"],
        description:
            "A practical beauty essential for maintaining a polished look at home.",
        images: [
            "img/Micro Twists3.jpeg",
            "img/Micro Twists1.jpeg",
            "img/Micro Twists4.jpeg"
        ],
        badge: "New"
    }
];

/* =========================================================
   STYLISTS
   ========================================================= */

const stylists = [
    {
        name: "Kelvin Nwajei",
        role: "Lead Stylist",
        img: "https://picsum.photos/id/64/600/700"
    },

    {
        name: "Beauty Buffet Team",
        role: "Braids & Locs Specialist",
        img: "https://picsum.photos/id/65/600/700"
    },

    {
        name: "Professional Stylists",
        role: "Natural Hair Experts",
        img: "https://picsum.photos/id/66/600/700"
    }
];

/* =========================================================
   GALLERY
   ========================================================= */

const galleryImages = [
    "https://picsum.photos/id/1015/800/900",
    "https://picsum.photos/id/201/800/900",
    "https://picsum.photos/id/251/800/900",
    "https://picsum.photos/id/301/800/900",
    "https://picsum.photos/id/870/800/900",
    "https://picsum.photos/id/1005/800/900",
    "https://picsum.photos/id/133/800/900",
    "https://picsum.photos/id/160/800/900"
];

/* =========================================================
   GLOBAL STATE
   ========================================================= */

let selectedService = null;
let selectedProduct = null;

/* =========================================================
   HELPERS
   ========================================================= */

function escapeHtml(value) {
    return String(value ?? "")
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;")
        .replaceAll('"', "&quot;")
        .replaceAll("'", "&#039;");
}

function parsePrice(price) {
    const match = String(price).match(/\d+(?:\.\d+)?/);

    return match ? Number(match[0]) : 0;
}

function formatPrice(amount) {
    const numericAmount = Number(amount || 0);

    return `₵${numericAmount.toLocaleString("en-US", {
        minimumFractionDigits: numericAmount % 1 ? 2 : 0,
        maximumFractionDigits: numericAmount % 1 ? 2 : 0
    })}`;
}

function getServiceTotal(basePrice, appointmentType) {
    return appointmentType === "home"
        ? basePrice * HOME_SERVICE_MULTIPLIER
        : basePrice;
}

/* =========================================================
   GET SELECTED SALON SERVICE
   ========================================================= */

function getSelectedServiceInfo() {
    const select = document.getElementById("service-select");

    if (!select || !select.value) {
        return null;
    }

    try {
        return JSON.parse(select.value);
    } catch (error) {
        console.error("Unable to parse selected service:", error);
        return null;
    }
}

/* =========================================================
   MODAL CONTROLS
   ========================================================= */

function openModal(id) {
    const modal = document.getElementById(id);

    if (!modal) {
        console.error(`Modal not found: ${id}`);
        return;
    }

    modal.classList.remove("hidden");
    modal.setAttribute("aria-hidden", "false");

    document.body.style.overflow = "hidden";
}

function closeModal(id) {
    const modal = document.getElementById(id);

    if (!modal) {
        return;
    }

    modal.classList.add("hidden");
    modal.setAttribute("aria-hidden", "true");

    if (!document.querySelector(".modal:not(.hidden)")) {
        document.body.style.overflow = "";
    }
}

/* =========================================================
   NAVIGATION
   ========================================================= */

function scrollToSection(id) {
    document
        .getElementById(id)
        ?.scrollIntoView({
            behavior: "smooth"
        });
}

function toggleMobileMenu() {
    document
        .getElementById("mobile-menu")
        ?.classList.toggle("open");
}

function closeMobileMenu() {
    document
        .getElementById("mobile-menu")
        ?.classList.remove("open");
}

/* =========================================================
   SERVICES
   ========================================================= */

function populateServices() {
    const container = document.getElementById("services-container");

    if (!container) {
        return;
    }

    let html = "";

    Object.entries(servicesData).forEach(([category, styles]) => {
        html += `
            <div class="service-category reveal">

                <div class="category-title">
                    <h3>${escapeHtml(category)}</h3>
                </div>

                <div class="service-grid">
        `;

        styles.forEach((style, styleIndex) => {
            html += `
                <article class="service-card">

                    <div class="service-slider" data-slider>

                        ${style.images
                            .map(
                                (image, index) => `
                                    <img
                                        src="${escapeHtml(image)}"
                                        alt="${escapeHtml(style.name)}"
                                        class="slide-image ${
                                            index === 0 ? "active" : ""
                                        }"
                                    >
                                `
                            )
                            .join("")}

                        <div class="service-image-overlay"></div>

                    </div>

                    <div class="service-body">

                        <h4>
                            ${escapeHtml(style.name)}
                        </h4>

                        <p class="service-description">
                            ${escapeHtml(style.description || "")}
                        </p>

                        ${
                            style.benefits?.length
                                ? `
                                    <div class="benefits">

                                        ${style.benefits
                                            .map(
                                                item => `
                                                    <div class="benefit">
                                                        <i class="fa-solid fa-check"></i>
                                                        ${escapeHtml(item)}
                                                    </div>
                                                `
                                            )
                                            .join("")}

                                    </div>
                                `
                                : ""
                        }

                        <div class="variant-list">

                            ${style.variants
                                .map(
                                    (variant, variantIndex) => `
                                        <button
                                            type="button"
                                            class="variant-box"
                                            onclick="selectVariant('${escapeHtml(
                                                category
                                            )}', ${styleIndex}, ${variantIndex})"
                                        >

                                            <span class="variant-name">
                                                ${escapeHtml(
                                                    variant.length
                                                )}
                                            </span>

                                            <span>

                                                <span class="variant-price">
                                                    ${escapeHtml(
                                                        variant.price
                                                    )}
                                                </span>

                                                <span class="variant-duration">
                                                    ${escapeHtml(
                                                        variant.duration
                                                    )}
                                                </span>

                                            </span>

                                        </button>
                                    `
                                )
                                .join("")}

                        </div>

                        ${
                            style.timeline
                                ? `
                                    <div class="timeline">

                                        <i class="fa-regular fa-clock"></i>

                                        ${escapeHtml(style.timeline)}

                                    </div>
                                `
                                : ""
                        }

                    </div>

                </article>
            `;
        });

        html += `
                </div>
            </div>
        `;
    });

    container.innerHTML = html;

    startServiceSliders();
}

/* =========================================================
   SERVICE IMAGE SLIDERS
   ========================================================= */

function startServiceSliders() {
    document
        .querySelectorAll("[data-slider]")
        .forEach(slider => {
            const images =
                slider.querySelectorAll(".slide-image");

            if (images.length <= 1) {
                return;
            }

            let current = 0;

            setInterval(() => {
                images[current].classList.remove("active");

                current =
                    (current + 1) % images.length;

                images[current].classList.add("active");
            }, 6500);
        });
}

/* =========================================================
   IMPORTANT:
   CLICKING A VARIANT OPENS THE SALON BOOKING MODAL
   WITH THAT EXACT VARIANT SELECTED.
   ========================================================= */

function selectVariant(category, styleIndex, variantIndex) {
    /*
     * Find the exact category.
     */
    const styles = servicesData[category];

    if (!styles) {
        console.error(
            "Service category not found:",
            category
        );
        return;
    }

    /*
     * Find the exact style.
     */
    const style = styles[styleIndex];

    if (!style) {
        console.error(
            "Service style not found:",
            category,
            styleIndex
        );
        return;
    }

    /*
     * Find the exact variant.
     */
    const variant =
        style.variants?.[variantIndex];

    if (!variant) {
        console.error(
            "Service variant not found:",
            category,
            styleIndex,
            variantIndex
        );
        return;
    }

    /*
     * Save the EXACT service/variant clicked.
     */
    selectedService = {
        category: category,

        styleIndex: styleIndex,

        variantIndex: variantIndex,

        fullName: `${category} - ${style.name} (${variant.length})`,

        price: variant.price,

        basePrice: parsePrice(variant.price),

        duration: variant.duration
    };

    /*
     * Build the booking form AFTER selectedService
     * has been saved.
     */
    populateBookingForm();

    /*
     * Open the normal salon appointment modal.
     */
    openModal("booking-modal");
}

/* =========================================================
   SALON BOOKING FORM
   ========================================================= */

function populateBookingForm() {
    const form =
        document.getElementById("booking-form");

    if (!form) {
        return;
    }

    let options = `
        <option value="">
            Select a service...
        </option>
    `;

    /*
     * Build every available salon service.
     */
    Object.entries(servicesData).forEach(
        ([category, styles]) => {
            styles.forEach(style => {
                style.variants.forEach(variant => {
                    const service = {
                        fullName: `${category} - ${style.name} (${variant.length})`,
                        price: variant.price,
                        basePrice: parsePrice(
                            variant.price
                        ),
                        duration: variant.duration
                    };

                    /*
                     * THIS IS WHAT PRE-SELECTS THE
                     * EXACT VARIANT THAT WAS CLICKED.
                     */
                    const selected =
                        selectedService?.fullName ===
                        service.fullName
                            ? "selected"
                            : "";

                    /*
                     * Use a safe JSON string for the
                     * option value.
                     */
                    const optionValue =
                        escapeHtml(
                            JSON.stringify(service)
                        );

                    options += `
                        <option
                            value='${optionValue}'
                            ${selected}
                        >
                            ${escapeHtml(
                                service.fullName
                            )}
                            —
                            ${escapeHtml(
                                service.price
                            )}
                        </option>
                    `;
                });
            });
        }
    );

    form.innerHTML = `
        <div class="form-group">

            <label
                class="form-label"
                for="service-select"
            >
                Beauty service
            </label>

            <select
                id="service-select"
                required
                class="form-control"
                onchange="updateBookingSummary()"
            >
                ${options}
            </select>

        </div>

        <div class="booking-location-display">

            <div class="booking-location-icon">
                <i class="fa-solid fa-location-dot"></i>
            </div>

            <div>

                <span class="booking-location-label">
                    Salon appointment
                </span>

                <strong>
                    Agbogba, Accra
                </strong>

                <small>
                    Your appointment will take place
                    at our salon.
                </small>

            </div>

        </div>

        <div
            id="booking-summary"
            class="summary-box"
        ></div>

        <div class="form-grid">

            <div class="form-group">

                <label
                    class="form-label"
                    for="date"
                >
                    Preferred date
                </label>

                <input
                    type="text"
                    id="date"
                    required
                    class="form-control"
                    placeholder="Choose date"
                >

            </div>

            <div class="form-group">

                <label
                    class="form-label"
                    for="time"
                >
                    Preferred time
                </label>

                <select
                    id="time"
                    required
                    class="form-control"
                >
                    ${[
                        "09:00 AM",
                        "10:00 AM",
                        "11:00 AM",
                        "12:00 PM",
                        "01:30 PM",
                        "02:30 PM",
                        "03:30 PM",
                        "04:30 PM"
                    ]
                        .map(
                            time =>
                                `<option>${time}</option>`
                        )
                        .join("")}
                </select>

            </div>

        </div>

        <div class="form-grid">

            <div class="form-group">

                <label
                    class="form-label"
                    for="name"
                >
                    Full name
                </label>

                <input
                    type="text"
                    id="name"
                    required
                    class="form-control"
                    placeholder="Your full name"
                >

            </div>

            <div class="form-group">

                <label
                    class="form-label"
                    for="phone"
                >
                    Phone number
                </label>

                <input
                    type="tel"
                    id="phone"
                    required
                    class="form-control"
                    placeholder="026 417 4992"
                >

            </div>

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="notes"
            >
                Additional notes
            </label>

            <textarea
                id="notes"
                class="form-control"
                rows="3"
                placeholder="Special requests, hair details, occasion, etc."
            ></textarea>

        </div>

        <button
            type="submit"
            class="booking-submit-btn"
        >
            <i class="fa-regular fa-calendar-check"></i>
            Confirm Appointment
        </button>
    `;

    /*
     * Initialize date picker.
     */
    setTimeout(() => {
        if (window.flatpickr) {
            flatpickr("#date", {
                disableMobile: true,
                minDate: "today",
                dateFormat: "d M, Y",
                defaultDate: new Date().fp_incr(1)
            });
        }

        updateBookingSummary();
    }, 50);
}

/* =========================================================
   BOOKING SUMMARY
   ========================================================= */

function updateBookingSummary() {
    const serviceInfo =
        getSelectedServiceInfo();

    const summary =
        document.getElementById(
            "booking-summary"
        );

    if (!summary) {
        return;
    }

    if (!serviceInfo) {
        summary.innerHTML = `
            <span style="color:#806d75;">
                Select a service to see your
                appointment price.
            </span>
        `;

        return;
    }

    const total =
        serviceInfo.basePrice;

    summary.innerHTML = `
        <span class="summary-label">
            Appointment summary
        </span>

        <div class="summary-main">

            <div>

                <strong>
                    At Beauty Buffet Salon
                </strong>

                <div
                    style="
                        color:#806d75;
                        font-size:.72rem;
                        margin-top:4px;
                    "
                >
                    ${escapeHtml(
                        serviceInfo.fullName
                    )}

                    <br>

                    ${escapeHtml(
                        serviceInfo.duration
                    )}
                </div>

            </div>

            <div class="summary-price">
                ${formatPrice(total)}
            </div>

        </div>
    `;
}

/* =========================================================
   NORMAL "BOOK NOW" BUTTON
   ========================================================= */

function openBookingModal() {
    /*
     * Normal Book Now should open with
     * NO service pre-selected.
     */
    selectedService = null;

    populateBookingForm();

    openModal("booking-modal");
}

/* =========================================================
   SUBMIT SALON BOOKING
   ========================================================= */

function submitBooking(event) {
    event.preventDefault();

    const serviceInfo =
        getSelectedServiceInfo();

    if (!serviceInfo) {
        alert("Please select a service.");
        return;
    }

    const finalPrice =
        formatPrice(serviceInfo.basePrice);

    const date =
        document.getElementById("date")
            ?.value || "";

    const time =
        document.getElementById("time")
            ?.value || "";

    const name =
        document.getElementById("name")
            ?.value.trim() || "";

    const phone =
        document.getElementById("phone")
            ?.value.trim() || "";

    const notes =
        document.getElementById("notes")
            ?.value.trim() || "None";

    const message =
`*New Salon Appointment - Beauty Buffet Salon GH*

👤 Name: ${name}
📞 Phone: ${phone}

💇 Service: ${serviceInfo.fullName}
💵 Price: ${finalPrice}

📍 Location: ${SALON_LOCATION}
📅 Date: ${date}
🕒 Time: ${time}

📝 Notes: ${notes}`;

    sendWhatsApp(message);

    closeModal("booking-modal");
}

/* =========================================================
   SEPARATE HOME SERVICE
   ========================================================= */

function openHomeServiceModal() {
    const form =
        document.getElementById(
            "home-service-form"
        );

    if (!form) {
        return;
    }

    let options = `
        <option value="">
            Select a service...
        </option>
    `;

    Object.entries(servicesData).forEach(
        ([category, styles]) => {
            styles.forEach(style => {
                style.variants.forEach(variant => {
                    const service = {
                        fullName: `${category} - ${style.name} (${variant.length})`,
                        price: variant.price,
                        basePrice: parsePrice(
                            variant.price
                        ),
                        duration: variant.duration
                    };

                    options += `
                        <option
                            value='${escapeHtml(
                                JSON.stringify(service)
                            )}'
                        >
                            ${escapeHtml(
                                service.fullName
                            )}
                            —
                            ${escapeHtml(
                                service.price
                            )}
                        </option>
                    `;
                });
            });
        }
    );

    form.innerHTML = `
        <div class="form-group">

            <label
                class="form-label"
                for="home-service-select"
            >
                Beauty service
            </label>

            <select
                id="home-service-select"
                required
                class="form-control"
                onchange="updateHomeServiceSummary()"
            >
                ${options}
            </select>

        </div>

        <div
            id="home-service-summary"
            class="summary-box"
        >
            <span style="color:#806d75;">
                Select a service to see the
                home-service price.
            </span>
        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="home-date"
            >
                Preferred date
            </label>

            <input
                type="text"
                id="home-date"
                required
                class="form-control"
                placeholder="Choose date"
            >

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="home-time"
            >
                Preferred time
            </label>

            <select
                id="home-time"
                required
                class="form-control"
            >
                ${[
                    "09:00 AM",
                    "10:00 AM",
                    "11:00 AM",
                    "12:00 PM",
                    "01:30 PM",
                    "02:30 PM",
                    "03:30 PM",
                    "04:30 PM"
                ]
                    .map(
                        time =>
                            `<option>${time}</option>`
                    )
                    .join("")}
            </select>

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="home-name"
            >
                Full name
            </label>

            <input
                type="text"
                id="home-name"
                required
                class="form-control"
                placeholder="Your full name"
            >

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="home-phone"
            >
                Phone number
            </label>

            <input
                type="tel"
                id="home-phone"
                required
                class="form-control"
                placeholder="026 417 4992"
            >

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="home-location"
            >
                Home/location address
            </label>

            <textarea
                id="home-location"
                required
                class="form-control"
                rows="3"
                placeholder="House number, street, area and nearby landmark"
            ></textarea>

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="home-notes"
            >
                Additional notes
            </label>

            <textarea
                id="home-notes"
                class="form-control"
                rows="2"
                placeholder="Special requests or details"
            ></textarea>

        </div>

        <button
            type="submit"
            class="booking-submit-btn"
        >
            <i class="fa-solid fa-house"></i>
            Request Home Service
        </button>
    `;

    setTimeout(() => {
        if (window.flatpickr) {
            flatpickr("#home-date", {
                disableMobile: true,
                minDate: "today",
                dateFormat: "d M, Y",
                defaultDate: new Date().fp_incr(1)
            });
        }
    }, 50);

    form.onsubmit =
        submitHomeService;

    openModal("home-service-modal");
}

/* =========================================================
   HOME SERVICE SUMMARY
   ========================================================= */

function updateHomeServiceSummary() {
    const value =
        document.getElementById(
            "home-service-select"
        )?.value;

    const summary =
        document.getElementById(
            "home-service-summary"
        );

    if (!summary) {
        return;
    }

    if (!value) {
        summary.innerHTML = `
            <span style="color:#806d75;">
                Select a service to see the
                home-service price.
            </span>
        `;

        return;
    }

    let service;

    try {
        service = JSON.parse(value);
    } catch (error) {
        console.error(
            "Unable to parse home service:",
            error
        );

        return;
    }

    const total =
        getServiceTotal(
            service.basePrice,
            "home"
        );

    summary.innerHTML = `
        <span class="summary-label">
            Home service total
        </span>

        <div class="summary-main">

            <div>

                <strong>
                    ${escapeHtml(
                        service.fullName
                    )}
                </strong>

                <div
                    style="
                        color:#806d75;
                        font-size:.72rem;
                        margin-top:4px;
                    "
                >
                    ${escapeHtml(
                        service.duration
                    )}

                    • Home service fee included
                </div>

            </div>

            <div class="summary-price">
                ${formatPrice(total)}
            </div>

        </div>
    `;
}

/* =========================================================
   SUBMIT HOME SERVICE
   ========================================================= */

function submitHomeService(event) {
    event.preventDefault();

    const serviceValue =
        document.getElementById(
            "home-service-select"
        )?.value;

    if (!serviceValue) {
        alert("Please select a service.");
        return;
    }

    let service;

    try {
        service =
            JSON.parse(serviceValue);
    } catch (error) {
        alert(
            "Unable to read the selected service."
        );

        return;
    }

    const date =
        document.getElementById(
            "home-date"
        )?.value || "";

    const time =
        document.getElementById(
            "home-time"
        )?.value || "";

    const name =
        document.getElementById(
            "home-name"
        )?.value.trim() || "";

    const phone =
        document.getElementById(
            "home-phone"
        )?.value.trim() || "";

    const location =
        document.getElementById(
            "home-location"
        )?.value.trim() || "";

    const notes =
        document.getElementById(
            "home-notes"
        )?.value.trim() || "None";

    const total =
        formatPrice(
            getServiceTotal(
                service.basePrice,
                "home"
            )
        );

    const message =
`*New Home Service Request - Beauty Buffet Salon GH*

👤 Name: ${name}
📞 Phone: ${phone}

💇 Service: ${service.fullName}
💰 Base Price: ${service.price}
💵 Home Service Total: ${total}

🏠 Location: ${location}
📅 Preferred Date: ${date}
🕒 Preferred Time: ${time}

📝 Notes: ${notes}`;

    sendWhatsApp(message);

    closeModal(
        "home-service-modal"
    );
}

/* =========================================================
   PRODUCTS
   ========================================================= */

function populateProducts() {
    const container =
        document.getElementById(
            "products-container"
        );

    if (!container) {
        return;
    }

    container.innerHTML =
        productsData
            .map(
                product => `
                    <article class="product-card reveal">

                        <div class="product-media">

                            <img
                                src="${escapeHtml(
                                    product.images[0]
                                )}"
                                alt="${escapeHtml(
                                    product.name
                                )}"
                                class="product-main-image"
                                id="product-image-${escapeHtml(
                                    product.id
                                )}"
                            >

                            ${
                                product.badge
                                    ? `
                                        <span class="product-badge">
                                            ${escapeHtml(
                                                product.badge
                                            )}
                                        </span>
                                    `
                                    : ""
                            }

                        </div>

                        <div class="product-body">

                            <h3>
                                ${escapeHtml(
                                    product.name
                                )}
                            </h3>

                            <p class="product-description">
                                ${escapeHtml(
                                    product.description
                                )}
                            </p>

                            <div class="product-meta">

                                <div>

                                    <span>
                                        Starting from
                                    </span>

                                    <strong class="product-price">
                                        ${formatPrice(
                                            product.price
                                        )}
                                    </strong>

                                </div>

                                <div>

                                    <span>
                                        Available sizes
                                    </span>

                                    <strong>
                                        ${product.sizes.length}
                                    </strong>

                                </div>

                            </div>

                            <button
                                class="primary-btn"
                                style="width:100%;"
                                onclick="openProductOrder('${escapeHtml(
                                    product.id
                                )}')"
                            >
                                Order Product
                                <i class="fa-solid fa-arrow-right"></i>
                            </button>

                        </div>

                    </article>
                `
            )
            .join("");
}

/* =========================================================
   OPEN PRODUCT ORDER
   ========================================================= */

function openProductOrder(productId) {
    selectedProduct =
        productsData.find(
            product =>
                product.id === productId
        );

    if (!selectedProduct) {
        return;
    }

    const form =
        document.getElementById(
            "product-form"
        );

    if (!form) {
        return;
    }

    form.innerHTML = `
        <div class="product-order-preview">

            <img
                src="${escapeHtml(
                    selectedProduct.images[0]
                )}"
                alt="${escapeHtml(
                    selectedProduct.name
                )}"
            >

            <div>

                <strong>
                    ${escapeHtml(
                        selectedProduct.name
                    )}
                </strong>

                <span>
                    ${escapeHtml(
                        selectedProduct.description
                    )}
                </span>

            </div>

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="product-size"
            >
                Size
            </label>

            <select
                id="product-size"
                required
                class="form-control"
                onchange="updateProductTotal()"
            >
                ${selectedProduct.sizes
                    .map(
                        size => `
                            <option value="${escapeHtml(
                                size
                            )}">
                                ${escapeHtml(size)}
                            </option>
                        `
                    )
                    .join("")}
            </select>

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="product-quantity"
            >
                Number / Quantity
            </label>

            <input
                id="product-quantity"
                type="number"
                min="1"
                value="1"
                required
                class="form-control"
                oninput="updateProductTotal()"
            >

        </div>

        <div
            class="summary-box"
            id="product-order-summary"
        ></div>

        <div class="form-group">

            <label
                class="form-label"
                for="product-name"
            >
                Full name
            </label>

            <input
                id="product-name"
                type="text"
                required
                class="form-control"
                placeholder="Your full name"
            >

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="product-phone"
            >
                Phone number
            </label>

            <input
                id="product-phone"
                type="tel"
                required
                class="form-control"
                placeholder="026 417 4992"
            >

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="product-location"
            >
                Delivery location
            </label>

            <textarea
                id="product-location"
                required
                class="form-control"
                rows="3"
                placeholder="House number, street, area and nearby landmark"
            ></textarea>

        </div>

        <div class="form-group">

            <label
                class="form-label"
                for="product-notes"
            >
                Order notes
            </label>

            <textarea
                id="product-notes"
                class="form-control"
                rows="2"
                placeholder="Any delivery or product instructions"
            ></textarea>

        </div>

        <button
            type="submit"
            class="booking-submit-btn"
        >
            <i class="fa-solid fa-bag-shopping"></i>
            Submit Order
        </button>
    `;

    form.onsubmit =
        submitProductOrder;

    updateProductTotal();

    openModal("product-modal");
}

/* =========================================================
   PRODUCT TOTAL
   ========================================================= */

function updateProductTotal() {
    if (!selectedProduct) {
        return;
    }

    const quantity = Math.max(
        1,
        Number(
            document.getElementById(
                "product-quantity"
            )?.value || 1
        )
    );

    const size =
        document.getElementById(
            "product-size"
        )?.value ||
        selectedProduct.sizes[0];

    const total =
        selectedProduct.price *
        quantity;

    const summary =
        document.getElementById(
            "product-order-summary"
        );

    if (!summary) {
        return;
    }

    summary.innerHTML = `
        <span class="summary-label">
            Order summary
        </span>

        <div class="summary-main">

            <div>

                <strong>
                    ${escapeHtml(size)}
                </strong>

                <div
                    style="
                        color:#806d75;
                        font-size:.72rem;
                        margin-top:4px;
                    "
                >
                    ${quantity}
                    ×
                    ${formatPrice(
                        selectedProduct.price
                    )}
                </div>

            </div>

            <div class="summary-price">
                ${formatPrice(total)}
            </div>

        </div>
    `;
}

/* =========================================================
   SUBMIT PRODUCT ORDER
   ========================================================= */

function submitProductOrder(event) {
    event.preventDefault();

    if (!selectedProduct) {
        return;
    }

    const size =
        document.getElementById(
            "product-size"
        )?.value || "";

    const quantity = Math.max(
        1,
        Number(
            document.getElementById(
                "product-quantity"
            )?.value || 1
        )
    );

    const name =
        document.getElementById(
            "product-name"
        )?.value.trim() || "";

    const phone =
        document.getElementById(
            "product-phone"
        )?.value.trim() || "";

    const location =
        document.getElementById(
            "product-location"
        )?.value.trim() || "";

    const notes =
        document.getElementById(
            "product-notes"
        )?.value.trim() || "None";

    const total =
        selectedProduct.price *
        quantity;

    const message =
`*New Product Order - Beauty Buffet Salon GH*

🛍️ Product: ${selectedProduct.name}
📏 Size: ${size}
🔢 Number/Quantity: ${quantity}
💵 Unit Price: ${formatPrice(
        selectedProduct.price
    )}
💰 Order Total: ${formatPrice(
        total
    )}

👤 Customer: ${name}
📞 Phone: ${phone}
📍 Delivery Location: ${location}
📝 Notes: ${notes}`;

    sendWhatsApp(message);

    closeModal(
        "product-modal"
    );
}

/* =========================================================
   WHATSAPP HANDOFF
   ========================================================= */

function sendWhatsApp(message) {
    const url =
        `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
            message
        )}`;

    window.open(
        url,
        "_blank",
        "noopener,noreferrer"
    );
}

/* =========================================================
   STYLISTS
   ========================================================= */

function populateStylists() {
    const container =
        document.getElementById(
            "stylists-container"
        );

    if (!container) {
        return;
    }

    container.innerHTML =
        stylists
            .map(
                stylist => `
                    <article class="stylist-card">

                        <img
                            src="${escapeHtml(
                                stylist.img
                            )}"
                            alt="${escapeHtml(
                                stylist.name
                            )}"
                            class="stylist-image"
                        >

                        <div class="stylist-info">

                            <h3>
                                ${escapeHtml(
                                    stylist.name
                                )}
                            </h3>

                            <p>
                                ${escapeHtml(
                                    stylist.role
                                )}
                            </p>

                        </div>

                    </article>
                `
            )
            .join("");
}

/* =========================================================
   GALLERY
   ========================================================= */

function populateGallery() {
    const container =
        document.getElementById(
            "gallery-container"
        );

    if (!container) {
        return;
    }

    container.innerHTML =
        galleryImages
            .map(
                (src, index) => `
                    <div class="gallery-item">

                        <img
                            src="${escapeHtml(
                                src
                            )}"
                            alt="Beauty Buffet work ${
                                index + 1
                            }"
                            loading="lazy"
                        >

                    </div>
                `
            )
            .join("");
}

/* =========================================================
   ANIMATIONS
   ========================================================= */

function initAnimations() {
    if (window.gsap) {
        gsap.from(".site-nav", {
            y: -80,
            opacity: 0,
            duration: 1,
            ease: "power3.out"
        });

        gsap.from(".hero-content > *", {
            y: 35,
            opacity: 0,
            duration: 0.9,
            stagger: 0.12,
            delay: 0.25,
            ease: "power3.out"
        });
    }

    const observer =
        new IntersectionObserver(
            entries => {
                entries.forEach(
                    entry => {
                        if (
                            entry.isIntersecting
                        ) {
                            entry.target.classList.add(
                                "revealed"
                            );

                            observer.unobserve(
                                entry.target
                            );
                        }
                    }
                );
            },
            {
                threshold: 0.08
            }
        );

    document
        .querySelectorAll(".reveal")
        .forEach(element => {
            observer.observe(element);
        });
}

/* =========================================================
   ESCAPE KEY
   ========================================================= */

document.addEventListener(
    "keydown",
    event => {
        if (event.key === "Escape") {
            document
                .querySelectorAll(
                    ".modal:not(.hidden)"
                )
                .forEach(modal => {
                    closeModal(
                        modal.id
                    );
                });

            closeMobileMenu();
        }
    }
);

/* =========================================================
   INITIALIZE WEBSITE
   ========================================================= */

window.addEventListener(
    "load",
    () => {
        populateServices();
        populateProducts();
        populateStylists();
        populateGallery();
        initAnimations();
    }
);