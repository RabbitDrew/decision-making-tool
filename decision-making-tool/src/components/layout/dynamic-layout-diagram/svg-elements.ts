import ElementCreator from "../../global/element-creator";

class SvgElements {

    public static backArrow(): Element {
        const svgNS = 'http://www.w3.org/2000/svg';
        const svgBackArrow = document.createElementNS(svgNS, 'svg');
        svgBackArrow.setAttribute('class', 'svg-back');
        svgBackArrow.setAttribute('width', '50px');
        svgBackArrow.setAttribute('height', '50px');
        svgBackArrow.setAttribute('viewBox', '0 0 1024 1024');
        
        const pathBackOne = document.createElementNS(svgNS, 'path');
        pathBackOne.setAttribute('class', 'svg-back-path-one');
        pathBackOne.setAttribute('fill', '#000000');
        pathBackOne.setAttribute('d', 'M224 480h640a32 32 0 1 1 0 64H224a32 32 0 0 1 0-64z');
        ElementCreator.renderElement(svgBackArrow, pathBackOne);
        
        const pathBackTwo = document.createElementNS(svgNS, 'path');
        pathBackTwo.setAttribute('class', 'svg-back-path-two');
        pathBackTwo.setAttribute('fill', '#000000');
        pathBackTwo.setAttribute('d', 'm237.248 512 265.408 265.344a32 32 0 0 1-45.312 45.312l-288-288a32 32 0 0 1 0-45.312l288-288a32 32 0 1 1 45.312 45.312L237.248 512z');
        ElementCreator.renderElement(svgBackArrow, pathBackTwo);
        
        return svgBackArrow;
    }

    public static soundOn(): Element {
        const svgNS = 'http://www.w3.org/2000/svg';
        const svgSoundOn = document.createElementNS(svgNS, 'svg');
        svgSoundOn.setAttribute('class', 'svg-sound-on');
        svgSoundOn.setAttribute('width', '50');
        svgSoundOn.setAttribute('height', '50');
        svgSoundOn.setAttribute('viewBox', '0 0 24 24');
        
        const pathOne = document.createElementNS(svgNS, 'path');
        pathOne.setAttribute('class', 'svg-sound-on-path-one');
        pathOne.setAttribute('fill-rule', 'evenodd');
        pathOne.setAttribute('clip-rule', 'evenodd');
        pathOne.setAttribute('d', `M10.4 1.8C11.5532 0.262376 14 1.07799 14 3.00001V21.1214C14 23.0539 11.5313 23.8627 10.3878 22.3049L6.49356 17H4C2.34315 17 1 15.6569 1 14V10C1 8.34315 2.34315 7 4 7H6.5L10.4 1.8ZM12 3L8.1 8.2C7.72229 8.70361 7.12951 9 6.5 9H4C3.44772 9 3 9.44772 3 10V14C3 14.5523 3.44772 15 4 15H6.49356C7.13031 15 7.72901 15.3032 8.10581 15.8165L12 21.1214V3Z`);
        pathOne.setAttribute('fill', '#0F0F0F');
        svgSoundOn.appendChild(pathOne);
        
        const pathTwo = document.createElementNS(svgNS, 'path');
        pathTwo.setAttribute('class', 'svg-sound-on-path-two');
        pathTwo.setAttribute('d', `M16.2137 4.17445C16.1094 3.56451 16.5773 3 17.1961 3C17.6635 3 18.0648 3.328 18.1464 3.78824C18.4242 5.35347 19 8.96465 19 12C19 15.0353 18.4242 18.6465 18.1464 20.2118C18.0648 20.672 17.6635 21 17.1961 21C16.5773 21 16.1094 20.4355 16.2137 19.8256C16.5074 18.1073 17 14.8074 17 12C17 9.19264 16.5074 5.8927 16.2137 4.17445Z`);
        pathTwo.setAttribute('fill', '#0F0F0F');
        svgSoundOn.appendChild(pathTwo);
        
        const pathThree = document.createElementNS(svgNS, 'path');
        pathThree.setAttribute('class', 'svg-sound-on-path-three');
        pathThree.setAttribute('d', `M21.41 5C20.7346 5 20.2402 5.69397 20.3966 6.35098C20.6758 7.52413 21 9.4379 21 12C21 14.5621 20.6758 16.4759 20.3966 17.649C20.2402 18.306 20.7346 19 21.41 19C21.7716 19 22.0974 18.7944 22.2101 18.4509C22.5034 17.5569 23 15.5233 23 12C23 8.47672 22.5034 6.44306 22.2101 5.54913C22.0974 5.20556 21.7716 5 21.41 5Z`);
        pathThree.setAttribute('fill', '#0F0F0F');
        svgSoundOn.appendChild(pathThree);
        
        return svgSoundOn;
    }
    
    public static soundOff(): Element {
        const svgNS = 'http://www.w3.org/2000/svg';
        const svgSoundOff = document.createElementNS(svgNS, 'svg');
        svgSoundOff.setAttribute('class', 'svg-sound-off');
        svgSoundOff.setAttribute('width', '50px');
        svgSoundOff.setAttribute('height', '50px');
        svgSoundOff.setAttribute('viewBox', '0 0 24 24');
        svgSoundOff.setAttribute('fill', 'none');
        
        const pathOne = document.createElementNS(svgNS, 'path');
        pathOne.setAttribute('class', 'svg-sound-off-path-one');
        pathOne.setAttribute('fill-rule', 'evenodd');
        pathOne.setAttribute('clip-rule', 'evenodd');
        pathOne.setAttribute('d', 
            `M14 3.00001C14 1.07799 11.5532 0.262376 10.4 1.8L6.5 7H4C2.34315 7 1 8.34315 1 10V14C1 15.6569 2.34315 17 4 17H6.49356L10.3878 22.3049C11.5313 23.8627 14 23.0539 14 21.1214V3.00001ZM8.1 8.2L12 3V21.1214L8.10581 15.8165C7.72901 15.3032 7.13031 15 6.49356 15H4C3.44772 15 3 14.5523 3 14V10C3 9.44772 3.44772 9 4 9H6.5C7.12951 9 7.72229 8.70361 8.1 8.2Z`);
        svgSoundOff.appendChild(pathOne);
    
        const pathTwo = document.createElementNS(svgNS, 'path');
        pathTwo.setAttribute('class', 'svg-sound-off-path-two');
        pathTwo.setAttribute('d', 
            `M21.2929 8.57094C21.6834 8.18041 22.3166 8.18042 22.7071 8.57094C23.0976 8.96146 23.0976 9.59463 22.7071 9.98515L20.7603 11.9319L22.7071 13.8787C23.0976 14.2692 23.0976 14.9024 22.7071 15.2929C22.3166 15.6834 21.6834 15.6834 21.2929 15.2929L19.3461 13.3461L17.3994 15.2929C17.0088 15.6834 16.3757 15.6834 15.9852 15.2929C15.5946 14.9023 15.5946 14.2692 15.9852 13.8787L17.9319 11.9319L15.9852 9.98517C15.5946 9.59464 15.5946 8.96148 15.9852 8.57096C16.3757 8.18043 17.0088 8.18043 17.3994 8.57096L19.3461 10.5177L21.2929 8.57094Z`);
        svgSoundOff.appendChild(pathTwo);
    
        return svgSoundOff;
    }
    
    
    public static time(): Element {
        const svgNS = 'http://www.w3.org/2000/svg';
        const svgTime = document.createElementNS(svgNS, 'svg');
        svgTime.setAttribute('class', 'svg-time');
        svgTime.setAttribute('width', '50px');
        svgTime.setAttribute('height', '50px');
        svgTime.setAttribute('viewBox', '0 0 24 24');
        svgTime.setAttribute('fill', 'none');
        
        const pathOne = document.createElementNS(svgNS, 'path');
        pathOne.setAttribute('class', 'svg-time-path-one');
        pathOne.setAttribute('d', `M23 12C23 18.0751 18.0751 23 12 23C5.92487 23 1 18.0751 1 12C1 5.92487 5.92487 1 12 1C18.0751 1 23 5.92487 23 12ZM3.00683 12C3.00683 16.9668 7.03321 20.9932 12 20.9932C16.9668 20.9932 20.9932 16.9668 20.9932 12C20.9932 7.03321 16.9668 3.00683 12 3.00683C7.03321 3.00683 3.00683 7.03321 3.00683 12Z`);
        pathOne.setAttribute('fill', '#0F0F0F');
        svgTime.appendChild(pathOne);
        
        const pathTwo = document.createElementNS(svgNS, 'path');
        pathTwo.setAttribute('class', 'svg-time-path-two');
        pathTwo.setAttribute('d', `M12 5C11.4477 5 11 5.44771 11 6V12.4667C11 12.4667 11 12.7274 11.1267 12.9235C11.2115 13.0898 11.3437 13.2343 11.5174 13.3346L16.1372 16.0019C16.6155 16.278 17.2271 16.1141 17.5032 15.6358C17.7793 15.1575 17.6155 14.5459 17.1372 14.2698L13 11.8812V6C13 5.44772 12.5523 5 12 5Z`);
        pathTwo.setAttribute('fill', '#0F0F0F');
        svgTime.appendChild(pathTwo);
    
        return svgTime;
    }
    
    
}


export default SvgElements