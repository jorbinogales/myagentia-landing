import React from 'react';
import Link from "next/link";

function Navigation({ lang = false }) {
    return (
        <>
            {lang ? (
                <ul>
                    <li>
                        <a href="#">
                            أنا <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/">الصفحة الرئيسية 1</Link>
                            </li>
                            <li>
                                <Link href="/home-two">الصفحة الرئيسية 2</Link>
                            </li>
                            <li>
                                <Link href="/home-three">المنزل 3</Link>
                            </li>
                            <li>
                                <Link href="/home-four">المنزل 4</Link>
                            </li>
                            <li>
                                <Link href="/home-five">المنزل 5</Link>
                            </li>
                            <li>
                                <Link href="/home-six">الصفحة الرئيسية 6</Link>
                            </li>
                            <li>
                                <Link href="/home-seven">المنزل 7</Link>
                            </li>
                            <li>
                                <Link href="/home-eight">الصفحة الرئيسية 8</Link>
                            </li>
                            <li>
                                <Link href="/home-dark">الصفحة الرئيسية الظلام</Link>
                            </li>
                            <li>
                                <Link href="/home-rtl">الصفحة الرئيسية Rtl</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/service">خدمة</Link>
                    </li>
                    <li>
                        <a href="#">
                            الصفحات <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/about-us">عن</Link>
                            </li>
                            <li>
                                <Link href="/404">خطأ</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            أخبار <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/news">صفحة الأخبار </Link>
                            </li>
                            <li>
                                <Link href="/news/single-news">أخبار واحدة</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact">اتصل</Link>
                    </li>
                </ul>
            ) : (
                <ul>
                    <li>
                        <a href="#">
                            Home <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/">Home 1</Link>
                            </li>
                            <li>
                                <Link href="/home-two">Home 2</Link>
                            </li>
                            <li>
                                <Link href="/home-three">Home 3</Link>
                            </li>
                            <li>
                                <Link href="/home-four">Home 4</Link>
                            </li>
                            <li>
                                <Link href="/home-five">Home 5</Link>
                            </li>
                            <li>
                                <Link href="/home-six">Home 6</Link>
                            </li>
                            <li>
                                <Link href="/home-seven">Home 7</Link>
                            </li>
                            <li>
                                <Link href="/home-eight">Home 8</Link>
                            </li>
                            <li>
                                <Link href="/home-dark">Home Dark</Link>
                            </li>
                            <li>
                                <Link href="/home-rtl">Home Rtl</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/service">Service</Link>
                    </li>
                    <li>
                        <a href="#">
                            Pages <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/about-us">About</Link>
                            </li>
                            <li>
                                <Link href="/about-us-another">About 2</Link>
                            </li>
                            <li>
                                <Link href="/404">Error</Link>
                            </li>
                            <li>
                                <Link href="/shops">Shops</Link>
                            </li>
                            <li>
                                <Link href="/shops/shop-details">Shop details</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#">
                            News <i className="fal fa-angle-down" />
                        </a>
                        <ul className="sub-menu">
                            <li>
                                <Link href="/news">News Page</Link>
                            </li>
                            <li>
                                <Link href="/news/single-news">Single News</Link>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            )}
        </>
    );
}

export default Navigation;
