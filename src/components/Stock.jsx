

export default function Stock({ stock }) {
  /* Challenge

    Aşağıdaki değişkenler şu anda verilerle sabit kodlanmıştır. Sizin göreviniz aşağıdakileri yaparak bunları dinamik olarak oluşturulmuş değerlere dönüştürmektir: 
    
        1. İlk dört değişkenin değerleri - stockName, currentPrice, prevClosingPrice ve logo - stock adlı prop aracılığıyla bileşene aktarılan karşılık gelen değerler olmalıdır. (currentPrice ve prevClosingPrice için sayılar stringe dönüştürülmelidir).  
           
        2. Diğer dört değişken - numericalChange, rateChange, arrow ve colorClass - iki fiyat değerine göre aşağıdaki gibi belirlenmelidir: 


           
           Değişken		                            Değer 				  
			╷-------------------╷---------------------------------------------------------------╷
			|  numericalChange  |  CurrentPrice ile prevClosingPrice arasındaki fark            |  
			|-------------------|---------------------------------------------------------------|
			|  rateChange       | Fiyatın prevClosingPrice'a göre % olarak yükseldiğini veya    |
      |                   | düştüğünü temsil eden bir string'e dönüştürülmüş bir sayı     |   
			|-------------------|---------------------------------------------------------------|
			|  colorClass       | hisse senedi değer kazandıysa "yeşil"                         |
      |                   | hisse senedi değer kaybetmişse "kırmızı"                      |
      |                   | hisse senedi değerini koruduysa undefined                     |
			|-------------------|---------------------------------------------------------------|
			|  arrow            | Hisse senedi değer kazandıysa  "⬆"                            |
      |                   | Hisse senedi değer kaybetmişse "⬇"                            |
      |                   | Hisse senedi değerini koruduysa "▬"	                          |	
			¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯	

        3. numericalChange ve rateChange öğelerinin her ikisi de ondalık basamağın yüzde birine kadar temsil edilen sayılar olmalı ve bu sayılar yuvarlanmalıdır. Örneğin, 5 -> 5.00, 0 -> 0.00, 52.1 -> 52.10 ve 84.119 -> 84.12. 
           
        4. Değişkenler aşağıdakinden daha verimli bir şekilde ayarlanabilir. Ekrana yansıtılan son değerler istediğiniz gibi olduğu sürece, değişkenlerin ayarlanma şeklini istediğiniz gibi değiştirebilirsiniz. Okunabilirliği korurken kodunuzu olabildiğince kısa ve DRY (Kendinizi Tekrar Etmeyin) yapmaya çalışın.
           
        Not: Sayıların stringlere dönüştürülmesiyle ilgili kısmı fazla düşünmeyin. Nasıl yaklaştığınıza bağlı olarak, bu challenge'ı çözerken  muhtemelen otomatik olarak gerçekleşecektir. 
*/
const numerial = stock.currentPrice - stock.prevClosingPrice ;

function colorupdate (currentPrice){
  let color;
  if(currentPrice !== null){
    if(currentPrice > stock.prevClosingPrice){
      color = "green"
    } else if(currentPrice < stock.prevClosingPrice){
      color = "red"
    }else{
      color = undefined
    }
  }
  return color 
}
const stockName = stock.stockName;

const logo = stock.logo;

const currentPrice = stock.currentPrice;

const prevClosingPrice = stock.prevClosingPrice;

const numericalChange = numerial.toFixed(2);

const rateChange = numerial.toFixed(2);

const colorClass = colorupdate(currentPrice);

const arrow = rateChange > 0 ? "⬆":rateChange < 0 ? "⬇":"▬"	;


  return (
    <div className="stock-container">
      <div className={colorClass}>
        <p>
          {arrow}
          {numericalChange}
        </p>
        <p>{rateChange}%</p>
      </div>
      <div>
        <img className="logo" src={logo} />
      </div>
      <div>
        <p>{stockName}</p>
      </div>
      <div>
        <p>${currentPrice}</p>
        <p>Güncel Fiyat</p>
      </div>
      <div>
        <p>Önceki Kapanış: ${prevClosingPrice}</p>
      </div>
    </div>
  );
}
