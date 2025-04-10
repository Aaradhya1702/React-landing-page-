import React, { useState, useEffect } from "react";
import LanguageCurrencyModal from "./LanguageCurrencyModal";
import { Menu,Globe, X } from "lucide-react";


export default function Header() {
  const [isModalOpen, setModalOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`w-full fixed top-0 left-0 z-50 transition-shadow bg-white ${scrolled ? "shadow-md" : "shadow-sm"}`}>
      <div className="flex items-center justify-between px-6 py-4  mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <a className="flex flex-row justify-start items-center" href="/"><a className="flex flex-row justify-start items-center" href="/">
<svg width="89.49312377210217" height="24" viewBox="0 0 1898 515" fill="none" xmlns="http://www.w3.org/2000/svg" className="xl:hidden">
<path fill-rule="evenodd" clip-rule="evenodd" d="M238.357 477C369.997 477 476.713 370.22 476.713 238.5C476.713 106.78 369.997 0 238.357 0C106.716 0 0 106.78 0 238.5C0 277.96 9.57424 315.17 26.524 347.96C27.6134 306.54 27.6833 280.88 27.5135 264.75C27.4935 262.71 27.4235 257.05 27.6434 249.42C28.0331 235.46 28.5728 218.86 32.9102 199.21C34.929 190.05 37.0177 183.39 38.9566 177.64C46.2322 156.05 57.0257 136.34 71.7269 118.85C71.8968 118.65 72.1166 118.48 72.3365 118.31C72.4464 118.23 72.5564 118.14 72.6563 118.05C74.4752 115.1 76.9237 112.67 79.3523 110.26C79.9719 109.64 80.5915 109.02 81.2012 108.4C91.435 97.9 102.958 89.01 115.491 81.43C115.96 81.14 116.48 80.92 117 80.71C117.239 80.61 117.469 80.51 117.709 80.4C123.846 76.21 130.601 73.19 137.407 70.37C145.832 66.88 154.317 63.49 163.372 61.89C168.768 60.06 174.355 59.18 179.952 58.3C181.421 58.07 182.9 57.84 184.369 57.59C192.504 56.21 200.759 55.93 208.924 56.03C223.456 56.22 238.017 56.73 252.358 59.73C253.188 59.9 254.027 60.08 254.867 60.25C260.453 61.4 266.04 62.56 271.457 64.42C281.541 66.88 291.005 70.98 300.369 75.38C308.884 79.38 316.52 84.74 324.165 90.11L324.505 90.35C327.843 91.87 330.541 94.29 333.21 96.69C333.789 97.21 334.379 97.74 334.969 98.25C346.152 108 355.936 119.02 363.751 131.68C365.18 133.99 366.47 136.39 367.769 138.78C368.358 139.88 368.958 140.97 369.558 142.06C375.034 151.33 378.562 161.38 381.531 171.66C385.718 186.16 387.587 200.98 387.267 216.06C386.807 237.71 381.93 258.34 372.426 277.84C372.116 278.48 371.746 279.08 371.377 279.69C371.217 279.95 371.047 280.21 370.897 280.48C366.629 288.55 362.002 296.4 356.206 303.48C355.486 304.36 355.306 305.25 355.326 306.28C357.815 316.61 359.894 327.04 361.263 337.59C362.532 347.36 363.651 357.13 364.201 366.98C364.461 371.67 364.401 370.6 364.651 373.85C365.83 388.94 365.46 404.1 365.96 419.23C365.97 419.47 365.97 420.16 365.56 420.51C365.16 420.85 364.541 420.76 363.951 420.69C363.711 420.66 363.471 420.63 363.262 420.63C351.359 420.68 339.446 420.71 327.533 420.64C325.384 420.63 323.226 420.65 321.067 420.68C316.25 420.73 311.433 420.79 306.626 420.42C306.326 419.87 306.246 419.28 306.236 418.7C305.926 416.77 305.986 414.81 306.056 412.86C306.086 411.95 306.116 411.05 306.106 410.15C305.966 392.73 305.286 375.33 303.577 357.99C303.298 355.22 302.968 352.45 302.628 349.69C302.468 348.42 302.318 347.16 302.168 345.89C300.399 346.05 298.82 346.76 297.231 347.47C295.862 348.08 294.493 348.69 293.014 348.95C269.798 357.81 245.682 361.42 220.987 360.06C195.532 358.66 173.616 349.32 157.475 328.68C157.265 328.41 157.096 328.1 156.926 327.79C156.846 327.65 156.776 327.51 156.696 327.38C148.691 316.76 144.013 304.89 142.214 291.67C140.266 277.35 141.725 263.55 146.722 250.08C149 243.91 151.859 238.01 155.986 232.81C164.931 219.3 177.054 209.63 191.885 203.37C201.949 199.12 212.482 196.96 223.446 196.29C242.824 195.09 261.473 197.91 279.462 205.1C296.981 212.11 311.583 223.15 323.455 237.81C325.224 235.39 325.624 232.55 326.014 229.74C326.104 229.13 326.184 228.52 326.284 227.92C329.522 208.38 326.634 189.72 317.869 171.97C317.659 171.54 317.499 171.09 317.339 170.64C317.259 170.42 317.179 170.19 317.089 169.97C312.872 162.72 308.215 155.83 302.428 149.69C299.09 146.16 295.362 143.13 291.625 140.1C290.225 138.96 288.816 137.82 287.437 136.66C280.331 132.38 273.136 128.3 265.38 125.26C259.694 123.02 253.827 121.46 247.961 119.9C246.532 119.52 245.103 119.14 243.673 118.75C232.35 116.82 220.967 115.58 209.454 115.67C198.011 115.76 186.788 117.16 175.764 120.24C175.235 120.39 174.675 120.46 174.125 120.52C173.865 120.55 173.616 120.58 173.356 120.62C163.971 123.76 154.987 127.84 146.192 132.36C134.519 139.36 124.725 148.49 116.13 158.98C115.87 159.3 115.541 159.57 115.221 159.84C115.071 159.96 114.921 160.09 114.781 160.22C114.281 160.97 113.782 161.71 113.282 162.46C109.394 168.27 105.507 174.08 102.408 180.37C94.1534 197.17 89.4862 214.94 88.127 233.57C86.8478 251.2 86.8877 268.85 86.9377 286.51C86.9577 294.34 86.9777 302.16 86.8877 309.98C86.7878 318.04 86.7778 338.2 86.438 358.65C86.1782 374.38 85.6785 395.37 84.6491 420.63C100.19 433.82 127.923 453.97 167.519 466.33C167.529 466.29 202.508 477 238.357 477ZM85.6885 335.41H85.7085V335.38C85.7085 335.39 85.6985 335.39 85.6885 335.41ZM92.1746 118.38C92.5343 118.62 92.7842 118.94 92.9441 119.33C92.6942 119 92.4344 118.69 92.1746 118.38ZM259.744 120.78C260.064 120.7 260.303 120.56 260.493 120.36C260.433 120.72 260.223 120.92 259.744 120.78ZM165.84 312.74C166.2 312.56 166.56 312.39 166.93 312.22C166.64 312.48 166.25 312.63 165.84 312.74ZM269.148 294.23C269.798 293.96 270.447 293.7 271.087 293.42C272.256 292.92 273.436 292.46 274.625 292.01C278.203 290.63 281.791 289.25 284.799 286.71C274.395 267.71 258.495 257.32 236.818 255.83C224.745 255 213.312 256.03 204.857 266.24C204.677 266.63 204.487 267.02 204.307 267.41C203.887 268.3 203.468 269.18 203.098 270.09C200.01 277.46 199.88 284.69 204.167 291.7C209.294 297.53 215.96 299.74 223.486 300.39C228.133 300.79 232.73 300.49 237.327 300.2C237.817 300.17 238.317 300.14 238.806 300.1C248.83 299.47 258.714 297.94 268.249 294.59C268.558 294.47 268.848 294.35 269.148 294.23ZM340.685 371.56C340.965 371.28 341.635 371.17 342.144 371.18C341.655 371.32 341.165 371.44 340.685 371.56Z" fill="#1B83A6"></path><path d="M1841.05 393.71C1830.41 396.759 1820 399.288 1809.38 400.807C1780.91 404.886 1753.65 401.427 1728.73 386.373C1700.29 369.201 1684.26 343.471 1683.4 310.445C1682.1 261.325 1682.8 212.156 1682.74 162.996C1682.73 155.829 1684.88 153.91 1692.13 153.89C1704.92 153.85 1717.73 153.84 1730.52 153.9C1738.25 153.94 1739.94 155.649 1739.95 163.506C1739.98 209.147 1739.83 254.788 1740.02 300.419C1740.11 321.21 1748.35 337.264 1768.44 345.64C1779.24 350.138 1790.64 351.108 1802.12 350.668C1813.65 350.228 1824.78 347.54 1835.58 343.391C1839.3 341.962 1840.85 340.053 1840.84 335.744C1840.66 279.158 1840.72 222.581 1840.72 165.995C1840.72 155.089 1841.92 153.89 1852.72 153.89C1864.59 153.89 1876.47 153.85 1888.33 153.9C1896.16 153.93 1897.97 155.709 1897.97 163.286C1897.98 240.644 1898.07 318.012 1897.91 395.37C1897.87 416.511 1895.15 437.242 1886.22 456.814C1874.54 482.404 1854.44 497.847 1827.67 504.005C1791.95 512.221 1756.52 510.632 1722.16 496.778C1710.75 492.179 1700.7 485.252 1691.08 477.685C1687.37 474.767 1687 471.338 1689.67 467.52C1696.46 457.814 1703.16 448.038 1710.09 438.432C1714.15 432.824 1716.29 432.594 1722.05 436.433C1743.33 450.597 1766.4 458.913 1792.28 457.724C1811.51 456.844 1827.86 450.807 1835.95 431.435C1840.97 419.48 1841.73 406.855 1841.05 393.71Z" fill="#1B83A6"></path><path d="M1259 240.691C1264.92 230.297 1270.38 220.72 1275.85 211.144C1285.26 194.624 1294.8 178.174 1304.02 161.545C1306.97 156.228 1310.96 153.834 1316.98 153.894C1331.99 154.033 1347 153.894 1362.03 153.983C1365.06 154.003 1368.64 153.275 1370.47 156.707C1372.22 160.029 1370.05 162.692 1368.36 165.356C1344.98 202.375 1321.67 239.444 1298.13 276.374C1295.67 280.245 1295.78 282.818 1298.32 286.609C1322.77 322.95 1347.02 359.421 1371.27 395.902C1373.57 399.354 1377.2 403.005 1374.96 407.364C1372.68 411.783 1367.66 409.978 1363.78 410.018C1348.96 410.177 1334.13 409.928 1319.29 410.157C1313.43 410.247 1309.67 407.953 1306.74 402.915C1291.13 376.12 1275.31 349.446 1259.57 322.731C1257.51 322.91 1257.37 324.666 1256.7 325.803C1241.57 351.391 1226.39 376.958 1211.45 402.666C1208.41 407.903 1204.58 410.257 1198.49 410.167C1182.73 409.918 1166.97 410.117 1151.22 410.057C1148.18 410.048 1144.76 410.726 1142.95 407.105C1141.22 403.633 1143.37 401.059 1145.08 398.496C1169.94 361.097 1194.8 323.689 1219.85 286.4C1222.27 282.808 1222.45 280.394 1220.06 276.654C1196.81 240.203 1173.78 203.622 1150.73 167.041C1148.84 164.019 1145.53 160.926 1147.43 157.076C1149.53 152.816 1154.17 154.023 1157.92 153.993C1172.2 153.884 1186.47 154.073 1200.74 153.894C1206.97 153.814 1211.04 156.248 1214.13 161.754C1228.74 187.821 1243.65 213.747 1259 240.691Z" fill="#1B83A6"></path><path d="M866.031 396.019C838.241 357.173 810.43 318.338 782.47 279.612C779.889 276.037 779.939 274.299 784.34 273.281C794.964 270.824 804.458 265.751 813.621 260.139C835.59 246.698 850.155 227.625 857.068 202.739C862.23 184.165 862.25 165.511 859.199 146.638C854.457 117.339 840.301 94.0314 815.202 77.7741C793.214 63.5241 768.374 58.1017 742.735 57.5225C703.35 56.6437 663.935 57.153 624.53 57.0931C611.385 57.0731 611.015 57.4326 611.015 70.3945C611.005 124.689 611.015 178.973 611.015 233.267C611.015 272.362 611.015 311.457 611.015 350.553C611.015 366.49 610.975 382.418 611.025 398.356C611.055 408.591 612.486 409.979 622.54 409.979C634.434 409.979 646.328 409.979 658.223 409.979C668.727 409.979 670.538 408.212 670.538 397.767C670.548 360.519 670.598 323.281 670.458 286.033C670.448 282.348 671.008 280.81 675.199 280.92C686.904 281.22 698.618 281.15 710.323 280.94C713.574 280.88 715.364 282.158 717.095 284.665C728.87 301.731 740.754 318.717 752.608 335.713C768.384 358.332 784.2 380.92 799.926 403.578C802.997 408.002 806.559 410.269 812.371 410.109C827.977 409.69 843.593 410.089 859.209 409.88C863.21 409.83 868.612 412.096 870.783 407.093C872.724 402.65 868.422 399.364 866.031 396.019ZM709.602 227.924C698.458 228.004 687.304 227.774 676.16 228.024C671.998 228.114 670.327 227.355 670.418 222.602C670.748 205.016 670.548 187.411 670.548 169.825C670.548 152.42 670.728 135.004 670.428 117.598C670.347 112.805 671.908 111.717 676.41 111.757C697.028 111.956 717.665 111.407 738.273 112.026C749.507 112.366 760.872 113.754 771.375 118.427C785.271 124.619 794.414 134.984 797.855 149.893C801.447 165.481 802.037 181.09 796.105 196.298C789.602 212.965 776.487 221.553 759.551 225.278C743.045 228.923 726.289 227.814 709.602 227.924Z" fill="#1B83A6"></path><path d="M1632.14 255.356C1632.14 243.149 1630.84 231.033 1627.32 219.245C1614.03 174.731 1575.1 150.967 1532.31 148.661C1512.67 147.603 1493.58 150.378 1475.26 157.574C1470.99 159.251 1470.48 157.983 1470.49 154.021C1470.62 125.316 1470.57 96.6017 1470.56 67.8871C1470.56 58.4752 1469.15 57.0679 1459.6 57.028C1448.11 56.9781 1436.62 57.0081 1425.14 57.018C1414.37 57.028 1413.36 58.0061 1413.36 68.6456C1413.35 121.254 1413.36 173.853 1413.36 226.461C1413.36 279.809 1413.36 333.156 1413.36 386.493C1413.36 395.027 1414.3 396.134 1422.1 398.919C1443.87 406.704 1466.34 411.555 1489.26 414.03C1512.5 416.535 1535.74 416.904 1558.64 410.726C1604.07 398.49 1628.26 364.915 1631.43 319.762C1632.93 298.303 1632.13 276.824 1632.14 255.356ZM1572.72 322.237C1568.86 349.634 1552.19 362.16 1526.51 363.996C1508.98 365.254 1491.49 364.316 1474.49 358.916C1471.46 357.958 1470.47 356.73 1470.48 353.566C1470.58 307.645 1470.55 261.714 1470.54 215.792C1470.54 213.726 1470.49 212.009 1472.86 210.782C1497.46 198.006 1522.86 194.383 1548.91 205.422C1566.02 212.668 1572.25 227.789 1573.32 245.125C1574.06 257.112 1573.46 269.179 1573.46 287.194C1573.05 294.89 1574.65 308.593 1572.72 322.237Z" fill="#1B83A6"></path><path d="M1120.96 229.989C1116.76 197.789 1100.55 173.474 1071.06 159.058C1043.3 145.492 1014.01 144.02 984.198 150.101C938.528 159.428 909.947 191.608 906.759 238.004C904.75 267.128 905.21 296.392 906.379 325.526C908.048 367.174 934.271 398.652 974.175 410.033C995.061 415.994 1016.17 416.956 1037.54 414.401C1066.38 410.955 1092.12 399.964 1114.95 382.061C1118.91 378.955 1120.16 375.279 1117.03 371.001C1110.36 361.854 1103.58 352.787 1096.74 343.76C1093.96 340.063 1090.34 339.693 1086.4 341.877C1084.3 343.039 1082.23 344.291 1080.23 345.614C1058.42 359.99 1034.5 366.422 1008.46 364.178C991.333 362.705 976.903 356.253 968.738 339.893C964.071 330.556 964.751 320.437 964.441 310.418C964.321 306.551 965.73 305.93 969.168 305.95C993.122 306.08 1017.08 306.02 1041.03 306.02C1064.25 306.02 1087.45 306.03 1110.67 306.01C1112.51 306.01 1114.38 305.97 1116.21 305.73C1120.06 305.239 1122.29 303.165 1122.21 299.077C1121.78 276.045 1123.95 252.912 1120.96 229.989ZM1061.32 260.736C1045.74 260.546 1030.15 260.656 1014.56 260.656C999.338 260.656 984.128 260.576 968.908 260.726C965.71 260.756 964.281 260.265 964.461 256.558C964.841 248.594 964.381 240.589 966.16 232.724C970.157 215.081 980.91 204.151 998.519 200.064C1015 196.237 1030.98 197.108 1045.7 206.175C1057.76 213.599 1063.58 225.15 1065.17 238.896C1065.82 244.596 1065.52 250.407 1065.99 256.138C1066.3 259.885 1064.94 260.776 1061.32 260.736Z" fill="#1B83A6"></path></svg>
<svg width="130.51080550098231" height="35" viewBox="0 0 1898 515" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden xl:block"><path fill-rule="evenodd" clip-rule="evenodd" d="M238.357 477C369.997 477 476.713 370.22 476.713 238.5C476.713 106.78 369.997 0 238.357 0C106.716 0 0 106.78 0 238.5C0 277.96 9.57424 315.17 26.524 347.96C27.6134 306.54 27.6833 280.88 27.5135 264.75C27.4935 262.71 27.4235 257.05 27.6434 249.42C28.0331 235.46 28.5728 218.86 32.9102 199.21C34.929 190.05 37.0177 183.39 38.9566 177.64C46.2322 156.05 57.0257 136.34 71.7269 118.85C71.8968 118.65 72.1166 118.48 72.3365 118.31C72.4464 118.23 72.5564 118.14 72.6563 118.05C74.4752 115.1 76.9237 112.67 79.3523 110.26C79.9719 109.64 80.5915 109.02 81.2012 108.4C91.435 97.9 102.958 89.01 115.491 81.43C115.96 81.14 116.48 80.92 117 80.71C117.239 80.61 117.469 80.51 117.709 80.4C123.846 76.21 130.601 73.19 137.407 70.37C145.832 66.88 154.317 63.49 163.372 61.89C168.768 60.06 174.355 59.18 179.952 58.3C181.421 58.07 182.9 57.84 184.369 57.59C192.504 56.21 200.759 55.93 208.924 56.03C223.456 56.22 238.017 56.73 252.358 59.73C253.188 59.9 254.027 60.08 254.867 60.25C260.453 61.4 266.04 62.56 271.457 64.42C281.541 66.88 291.005 70.98 300.369 75.38C308.884 79.38 316.52 84.74 324.165 90.11L324.505 90.35C327.843 91.87 330.541 94.29 333.21 96.69C333.789 97.21 334.379 97.74 334.969 98.25C346.152 108 355.936 119.02 363.751 131.68C365.18 133.99 366.47 136.39 367.769 138.78C368.358 139.88 368.958 140.97 369.558 142.06C375.034 151.33 378.562 161.38 381.531 171.66C385.718 186.16 387.587 200.98 387.267 216.06C386.807 237.71 381.93 258.34 372.426 277.84C372.116 278.48 371.746 279.08 371.377 279.69C371.217 279.95 371.047 280.21 370.897 280.48C366.629 288.55 362.002 296.4 356.206 303.48C355.486 304.36 355.306 305.25 355.326 306.28C357.815 316.61 359.894 327.04 361.263 337.59C362.532 347.36 363.651 357.13 364.201 366.98C364.461 371.67 364.401 370.6 364.651 373.85C365.83 388.94 365.46 404.1 365.96 419.23C365.97 419.47 365.97 420.16 365.56 420.51C365.16 420.85 364.541 420.76 363.951 420.69C363.711 420.66 363.471 420.63 363.262 420.63C351.359 420.68 339.446 420.71 327.533 420.64C325.384 420.63 323.226 420.65 321.067 420.68C316.25 420.73 311.433 420.79 306.626 420.42C306.326 419.87 306.246 419.28 306.236 418.7C305.926 416.77 305.986 414.81 306.056 412.86C306.086 411.95 306.116 411.05 306.106 410.15C305.966 392.73 305.286 375.33 303.577 357.99C303.298 355.22 302.968 352.45 302.628 349.69C302.468 348.42 302.318 347.16 302.168 345.89C300.399 346.05 298.82 346.76 297.231 347.47C295.862 348.08 294.493 348.69 293.014 348.95C269.798 357.81 245.682 361.42 220.987 360.06C195.532 358.66 173.616 349.32 157.475 328.68C157.265 328.41 157.096 328.1 156.926 327.79C156.846 327.65 156.776 327.51 156.696 327.38C148.691 316.76 144.013 304.89 142.214 291.67C140.266 277.35 141.725 263.55 146.722 250.08C149 243.91 151.859 238.01 155.986 232.81C164.931 219.3 177.054 209.63 191.885 203.37C201.949 199.12 212.482 196.96 223.446 196.29C242.824 195.09 261.473 197.91 279.462 205.1C296.981 212.11 311.583 223.15 323.455 237.81C325.224 235.39 325.624 232.55 326.014 229.74C326.104 229.13 326.184 228.52 326.284 227.92C329.522 208.38 326.634 189.72 317.869 171.97C317.659 171.54 317.499 171.09 317.339 170.64C317.259 170.42 317.179 170.19 317.089 169.97C312.872 162.72 308.215 155.83 302.428 149.69C299.09 146.16 295.362 143.13 291.625 140.1C290.225 138.96 288.816 137.82 287.437 136.66C280.331 132.38 273.136 128.3 265.38 125.26C259.694 123.02 253.827 121.46 247.961 119.9C246.532 119.52 245.103 119.14 243.673 118.75C232.35 116.82 220.967 115.58 209.454 115.67C198.011 115.76 186.788 117.16 175.764 120.24C175.235 120.39 174.675 120.46 174.125 120.52C173.865 120.55 173.616 120.58 173.356 120.62C163.971 123.76 154.987 127.84 146.192 132.36C134.519 139.36 124.725 148.49 116.13 158.98C115.87 159.3 115.541 159.57 115.221 159.84C115.071 159.96 114.921 160.09 114.781 160.22C114.281 160.97 113.782 161.71 113.282 162.46C109.394 168.27 105.507 174.08 102.408 180.37C94.1534 197.17 89.4862 214.94 88.127 233.57C86.8478 251.2 86.8877 268.85 86.9377 286.51C86.9577 294.34 86.9777 302.16 86.8877 309.98C86.7878 318.04 86.7778 338.2 86.438 358.65C86.1782 374.38 85.6785 395.37 84.6491 420.63C100.19 433.82 127.923 453.97 167.519 466.33C167.529 466.29 202.508 477 238.357 477ZM85.6885 335.41H85.7085V335.38C85.7085 335.39 85.6985 335.39 85.6885 335.41ZM92.1746 118.38C92.5343 118.62 92.7842 118.94 92.9441 119.33C92.6942 119 92.4344 118.69 92.1746 118.38ZM259.744 120.78C260.064 120.7 260.303 120.56 260.493 120.36C260.433 120.72 260.223 120.92 259.744 120.78ZM165.84 312.74C166.2 312.56 166.56 312.39 166.93 312.22C166.64 312.48 166.25 312.63 165.84 312.74ZM269.148 294.23C269.798 293.96 270.447 293.7 271.087 293.42C272.256 292.92 273.436 292.46 274.625 292.01C278.203 290.63 281.791 289.25 284.799 286.71C274.395 267.71 258.495 257.32 236.818 255.83C224.745 255 213.312 256.03 204.857 266.24C204.677 266.63 204.487 267.02 204.307 267.41C203.887 268.3 203.468 269.18 203.098 270.09C200.01 277.46 199.88 284.69 204.167 291.7C209.294 297.53 215.96 299.74 223.486 300.39C228.133 300.79 232.73 300.49 237.327 300.2C237.817 300.17 238.317 300.14 238.806 300.1C248.83 299.47 258.714 297.94 268.249 294.59C268.558 294.47 268.848 294.35 269.148 294.23ZM340.685 371.56C340.965 371.28 341.635 371.17 342.144 371.18C341.655 371.32 341.165 371.44 340.685 371.56Z" fill="#1B83A6"></path><path d="M1841.05 393.71C1830.41 396.759 1820 399.288 1809.38 400.807C1780.91 404.886 1753.65 401.427 1728.73 386.373C1700.29 369.201 1684.26 343.471 1683.4 310.445C1682.1 261.325 1682.8 212.156 1682.74 162.996C1682.73 155.829 1684.88 153.91 1692.13 153.89C1704.92 153.85 1717.73 153.84 1730.52 153.9C1738.25 153.94 1739.94 155.649 1739.95 163.506C1739.98 209.147 1739.83 254.788 1740.02 300.419C1740.11 321.21 1748.35 337.264 1768.44 345.64C1779.24 350.138 1790.64 351.108 1802.12 350.668C1813.65 350.228 1824.78 347.54 1835.58 343.391C1839.3 341.962 1840.85 340.053 1840.84 335.744C1840.66 279.158 1840.72 222.581 1840.72 165.995C1840.72 155.089 1841.92 153.89 1852.72 153.89C1864.59 153.89 1876.47 153.85 1888.33 153.9C1896.16 153.93 1897.97 155.709 1897.97 163.286C1897.98 240.644 1898.07 318.012 1897.91 395.37C1897.87 416.511 1895.15 437.242 1886.22 456.814C1874.54 482.404 1854.44 497.847 1827.67 504.005C1791.95 512.221 1756.52 510.632 1722.16 496.778C1710.75 492.179 1700.7 485.252 1691.08 477.685C1687.37 474.767 1687 471.338 1689.67 467.52C1696.46 457.814 1703.16 448.038 1710.09 438.432C1714.15 432.824 1716.29 432.594 1722.05 436.433C1743.33 450.597 1766.4 458.913 1792.28 457.724C1811.51 456.844 1827.86 450.807 1835.95 431.435C1840.97 419.48 1841.73 406.855 1841.05 393.71Z" fill="#1B83A6"></path><path d="M1259 240.691C1264.92 230.297 1270.38 220.72 1275.85 211.144C1285.26 194.624 1294.8 178.174 1304.02 161.545C1306.97 156.228 1310.96 153.834 1316.98 153.894C1331.99 154.033 1347 153.894 1362.03 153.983C1365.06 154.003 1368.64 153.275 1370.47 156.707C1372.22 160.029 1370.05 162.692 1368.36 165.356C1344.98 202.375 1321.67 239.444 1298.13 276.374C1295.67 280.245 1295.78 282.818 1298.32 286.609C1322.77 322.95 1347.02 359.421 1371.27 395.902C1373.57 399.354 1377.2 403.005 1374.96 407.364C1372.68 411.783 1367.66 409.978 1363.78 410.018C1348.96 410.177 1334.13 409.928 1319.29 410.157C1313.43 410.247 1309.67 407.953 1306.74 402.915C1291.13 376.12 1275.31 349.446 1259.57 322.731C1257.51 322.91 1257.37 324.666 1256.7 325.803C1241.57 351.391 1226.39 376.958 1211.45 402.666C1208.41 407.903 1204.58 410.257 1198.49 410.167C1182.73 409.918 1166.97 410.117 1151.22 410.057C1148.18 410.048 1144.76 410.726 1142.95 407.105C1141.22 403.633 1143.37 401.059 1145.08 398.496C1169.94 361.097 1194.8 323.689 1219.85 286.4C1222.27 282.808 1222.45 280.394 1220.06 276.654C1196.81 240.203 1173.78 203.622 1150.73 167.041C1148.84 164.019 1145.53 160.926 1147.43 157.076C1149.53 152.816 1154.17 154.023 1157.92 153.993C1172.2 153.884 1186.47 154.073 1200.74 153.894C1206.97 153.814 1211.04 156.248 1214.13 161.754C1228.74 187.821 1243.65 213.747 1259 240.691Z" fill="#1B83A6"></path><path d="M866.031 396.019C838.241 357.173 810.43 318.338 782.47 279.612C779.889 276.037 779.939 274.299 784.34 273.281C794.964 270.824 804.458 265.751 813.621 260.139C835.59 246.698 850.155 227.625 857.068 202.739C862.23 184.165 862.25 165.511 859.199 146.638C854.457 117.339 840.301 94.0314 815.202 77.7741C793.214 63.5241 768.374 58.1017 742.735 57.5225C703.35 56.6437 663.935 57.153 624.53 57.0931C611.385 57.0731 611.015 57.4326 611.015 70.3945C611.005 124.689 611.015 178.973 611.015 233.267C611.015 272.362 611.015 311.457 611.015 350.553C611.015 366.49 610.975 382.418 611.025 398.356C611.055 408.591 612.486 409.979 622.54 409.979C634.434 409.979 646.328 409.979 658.223 409.979C668.727 409.979 670.538 408.212 670.538 397.767C670.548 360.519 670.598 323.281 670.458 286.033C670.448 282.348 671.008 280.81 675.199 280.92C686.904 281.22 698.618 281.15 710.323 280.94C713.574 280.88 715.364 282.158 717.095 284.665C728.87 301.731 740.754 318.717 752.608 335.713C768.384 358.332 784.2 380.92 799.926 403.578C802.997 408.002 806.559 410.269 812.371 410.109C827.977 409.69 843.593 410.089 859.209 409.88C863.21 409.83 868.612 412.096 870.783 407.093C872.724 402.65 868.422 399.364 866.031 396.019ZM709.602 227.924C698.458 228.004 687.304 227.774 676.16 228.024C671.998 228.114 670.327 227.355 670.418 222.602C670.748 205.016 670.548 187.411 670.548 169.825C670.548 152.42 670.728 135.004 670.428 117.598C670.347 112.805 671.908 111.717 676.41 111.757C697.028 111.956 717.665 111.407 738.273 112.026C749.507 112.366 760.872 113.754 771.375 118.427C785.271 124.619 794.414 134.984 797.855 149.893C801.447 165.481 802.037 181.09 796.105 196.298C789.602 212.965 776.487 221.553 759.551 225.278C743.045 228.923 726.289 227.814 709.602 227.924Z" fill="#1B83A6"></path><path d="M1632.14 255.356C1632.14 243.149 1630.84 231.033 1627.32 219.245C1614.03 174.731 1575.1 150.967 1532.31 148.661C1512.67 147.603 1493.58 150.378 1475.26 157.574C1470.99 159.251 1470.48 157.983 1470.49 154.021C1470.62 125.316 1470.57 96.6017 1470.56 67.8871C1470.56 58.4752 1469.15 57.0679 1459.6 57.028C1448.11 56.9781 1436.62 57.0081 1425.14 57.018C1414.37 57.028 1413.36 58.0061 1413.36 68.6456C1413.35 121.254 1413.36 173.853 1413.36 226.461C1413.36 279.809 1413.36 333.156 1413.36 386.493C1413.36 395.027 1414.3 396.134 1422.1 398.919C1443.87 406.704 1466.34 411.555 1489.26 414.03C1512.5 416.535 1535.74 416.904 1558.64 410.726C1604.07 398.49 1628.26 364.915 1631.43 319.762C1632.93 298.303 1632.13 276.824 1632.14 255.356ZM1572.72 322.237C1568.86 349.634 1552.19 362.16 1526.51 363.996C1508.98 365.254 1491.49 364.316 1474.49 358.916C1471.46 357.958 1470.47 356.73 1470.48 353.566C1470.58 307.645 1470.55 261.714 1470.54 215.792C1470.54 213.726 1470.49 212.009 1472.86 210.782C1497.46 198.006 1522.86 194.383 1548.91 205.422C1566.02 212.668 1572.25 227.789 1573.32 245.125C1574.06 257.112 1573.46 269.179 1573.46 287.194C1573.05 294.89 1574.65 308.593 1572.72 322.237Z" fill="#1B83A6"></path><path d="M1120.96 229.989C1116.76 197.789 1100.55 173.474 1071.06 159.058C1043.3 145.492 1014.01 144.02 984.198 150.101C938.528 159.428 909.947 191.608 906.759 238.004C904.75 267.128 905.21 296.392 906.379 325.526C908.048 367.174 934.271 398.652 974.175 410.033C995.061 415.994 1016.17 416.956 1037.54 414.401C1066.38 410.955 1092.12 399.964 1114.95 382.061C1118.91 378.955 1120.16 375.279 1117.03 371.001C1110.36 361.854 1103.58 352.787 1096.74 343.76C1093.96 340.063 1090.34 339.693 1086.4 341.877C1084.3 343.039 1082.23 344.291 1080.23 345.614C1058.42 359.99 1034.5 366.422 1008.46 364.178C991.333 362.705 976.903 356.253 968.738 339.893C964.071 330.556 964.751 320.437 964.441 310.418C964.321 306.551 965.73 305.93 969.168 305.95C993.122 306.08 1017.08 306.02 1041.03 306.02C1064.25 306.02 1087.45 306.03 1110.67 306.01C1112.51 306.01 1114.38 305.97 1116.21 305.73C1120.06 305.239 1122.29 303.165 1122.21 299.077C1121.78 276.045 1123.95 252.912 1120.96 229.989ZM1061.32 260.736C1045.74 260.546 1030.15 260.656 1014.56 260.656C999.338 260.656 984.128 260.576 968.908 260.726C965.71 260.756 964.281 260.265 964.461 256.558C964.841 248.594 964.381 240.589 966.16 232.724C970.157 215.081 980.91 204.151 998.519 200.064C1015 196.237 1030.98 197.108 1045.7 206.175C1057.76 213.599 1063.58 225.15 1065.17 238.896C1065.82 244.596 1065.52 250.407 1065.99 256.138C1066.3 259.885 1064.94 260.776 1061.32 260.736Z" fill="#1B83A6"></path></svg>
</a>
            {/* Add logo/icon if needed */}
            <span className="font-bold text-xl text-blue-700">Rexby</span>
          </a>
        </div>

        {/* Right Side */}
        <div className="flex items-center gap-4">
        <button className="border border-gray-300 text-black font-semibold px-4 py-2 rounded-lg hover:bg-gray-100 transition">
  Log in
</button>
<button
              onClick={() => setModalOpen(true)}
              className="p-2 rounded-full hover:bg-gray-100"
            >
              <Globe size={20} />
            </button>
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="text-gray-600 hover:text-black focus:outline-none"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>
      <LanguageCurrencyModal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
      />
      {/* Popover */}
      {isOpen && (
        <div className="absolute top-full right-4 mt-2 w-72 bg-white rounded-xl shadow-lg border p-6 z-50">
          <div className="text-xs text-gray-500 font-semibold mb-3">REXBY</div>
          <ul className="space-y-4 text-gray-800 font-medium">
            <li className="hover:text-blue-600 cursor-pointer">About us</li>
            <li className="hover:text-blue-600 cursor-pointer">Start exploring</li>
            <li className="hover:text-blue-600 cursor-pointer">Become a travel creator</li>
            <hr />
            <li className="hover:text-blue-600 cursor-pointer">Log in</li>
          </ul>
        </div>
      )}
    </header>
  );
}

