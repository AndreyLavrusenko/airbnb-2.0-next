# Airbnb 2.0 web application on Next.js
https://airbnb-2-0-pi.vercel.app

#### Libs

* Next.js
* Tailwind
* Heroicons
* Bar of progress
* React date rang


## Main page

Is adaptable to all devices

![main](https://github.com/AndreyLavrusenko/airbnb-2.0-next/blob/main/public/github/start.png?raw=true)

Calendar settings
```javascript
<DateRangePicker
    ranges={[selectionRange]}
    minDate={new Date()}
    rangeColors={["#FD5B61"]}
    onChange={handleSelect}
/>
```

Here you can choose the number of people, date and place

![calendar](https://github.com/AndreyLavrusenko/airbnb-2.0-next/blob/main/public/github/search.png?raw=true)


## Search page

![search](https://github.com/AndreyLavrusenko/airbnb-2.0-next/blob/main/public/github/all.png?raw=true)
