import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const Index = () => {
  const balloonCategories = [
    {
      title: "Фольгированные шары",
      items: ["Цифры", "Буквы", "Фигуры", "Сердца"],
      price: "от 150₽",
      icon: "Star"
    },
    {
      title: "Латексные шары",
      items: ["Классические", "Перламутровые", "Металлик", "Пастельные"],
      price: "от 50₽",
      icon: "Circle"
    },
    {
      title: "Букеты из шаров",
      items: ["Праздничные", "Детские", "Свадебные", "Корпоративные"],
      price: "от 800₽",
      icon: "Sparkles"
    },
    {
      title: "Шары с конфетти",
      items: ["Золотое", "Серебряное", "Цветное", "Разноцветное"],
      price: "от 200₽",
      icon: "Sparkle"
    }
  ];

  const deliveryZones = [
    { zone: "Центр города", time: "1-2 часа", price: "Бесплатно" },
    { zone: "Спальные районы", time: "2-3 часа", price: "300₽" },
    { zone: "Пригород", time: "3-4 часа", price: "500₽" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-purple-50 to-blue-50 overflow-hidden relative">
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `url('https://cdn.poehali.dev/projects/e2d9f4e6-85f0-4092-8499-fe585c8682cc/files/61828e5e-a960-4ab1-8856-bca9ded28fd5.jpg')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      />
      
      <div className="relative z-10 container mx-auto px-4 py-12 max-w-4xl">
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-block mb-6">
            <h1 className="text-7xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 mb-2" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              ШАРЫ
            </h1>
            <div className="flex items-center justify-center gap-3 text-4xl md:text-6xl font-bold text-gray-800" style={{ fontFamily: 'Montserrat, sans-serif' }}>
              <span>НА ПРАЗДНИК</span>
              <span className="text-6xl md:text-8xl">🎈</span>
            </div>
          </div>
          
          <div className="flex flex-wrap items-center justify-center gap-3 mb-6">
            <Badge className="bg-pink-500 text-white text-lg px-4 py-2 hover:bg-pink-600" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Быстрая доставка
            </Badge>
            <Badge className="bg-purple-500 text-white text-lg px-4 py-2 hover:bg-purple-600" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Гелий высшего качества
            </Badge>
            <Badge className="bg-blue-500 text-white text-lg px-4 py-2 hover:bg-blue-600" style={{ fontFamily: 'Rubik, sans-serif' }}>
              Работаем 24/7
            </Badge>
          </div>
          
          <p className="text-2xl text-gray-700 font-semibold" style={{ fontFamily: 'Rubik, sans-serif' }}>
            Сделаем ваш праздник незабываемым! 🎉
          </p>
        </div>

        <Card className="mb-10 p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-4 border-pink-200 animate-scale-in">
          <h2 className="text-4xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-pink-600 to-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            АССОРТИМЕНТ
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {balloonCategories.map((category, index) => (
              <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:scale-105 bg-gradient-to-br from-white to-pink-50 border-2 border-purple-200">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-pink-500 to-purple-500 flex items-center justify-center flex-shrink-0">
                    <Icon name={category.icon} className="text-white" size={24} />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                      {category.title}
                    </h3>
                    <div className="flex flex-wrap gap-2 mb-3">
                      {category.items.map((item, idx) => (
                        <Badge key={idx} variant="outline" className="border-pink-300 text-pink-700" style={{ fontFamily: 'Rubik, sans-serif' }}>
                          {item}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
                <div className="text-2xl font-bold text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {category.price}
                </div>
              </Card>
            ))}
          </div>
        </Card>

        <Card className="mb-10 p-8 bg-white/95 backdrop-blur-sm shadow-2xl border-4 border-blue-200 animate-scale-in">
          <h2 className="text-4xl font-black text-center mb-8 text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            ДОСТАВКА
          </h2>
          
          <div className="space-y-4 mb-6">
            {deliveryZones.map((zone, index) => (
              <div key={index} className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg border-2 border-blue-200 hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
                    <Icon name="MapPin" className="text-white" size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-gray-800" style={{ fontFamily: 'Rubik, sans-serif' }}>{zone.zone}</div>
                    <div className="text-sm text-gray-600" style={{ fontFamily: 'Rubik, sans-serif' }}>⏱️ {zone.time}</div>
                  </div>
                </div>
                <div className="text-xl font-bold text-purple-600" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                  {zone.price}
                </div>
              </div>
            ))}
          </div>
          
          <div className="bg-gradient-to-r from-pink-100 to-purple-100 p-6 rounded-lg border-2 border-purple-300">
            <div className="flex items-start gap-3">
              <Icon name="Gift" className="text-purple-600 flex-shrink-0 mt-1" size={28} />
              <div>
                <p className="font-bold text-lg text-gray-800 mb-2" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  🎁 БЕСПЛАТНАЯ ДОСТАВКА
                </p>
                <p className="text-gray-700" style={{ fontFamily: 'Rubik, sans-serif' }}>
                  При заказе от 3000₽ доставка по городу — бесплатно!
                </p>
              </div>
            </div>
          </div>
        </Card>

        <Card className="p-8 bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 text-white shadow-2xl border-4 border-white animate-scale-in">
          <h2 className="text-4xl font-black text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif' }}>
            КОНТАКТЫ
          </h2>
          
          <div className="space-y-6 mb-8">
            <div className="flex items-center justify-center gap-4 bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors">
              <Icon name="Phone" size={32} />
              <a href="tel:+79001234567" className="text-3xl font-bold hover:scale-105 transition-transform" style={{ fontFamily: 'Montserrat, sans-serif' }}>
                +7 (900) 123-45-67
              </a>
            </div>
            
            <div className="flex items-center justify-center gap-4 bg-white/20 backdrop-blur-sm p-6 rounded-xl hover:bg-white/30 transition-colors">
              <Icon name="Clock" size={28} />
              <span className="text-2xl font-semibold" style={{ fontFamily: 'Rubik, sans-serif' }}>
                Работаем круглосуточно 24/7
              </span>
            </div>
          </div>
          
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-purple-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 hover:scale-105 transition-transform" style={{ fontFamily: 'Rubik, sans-serif' }}>
              <Icon name="MessageCircle" size={24} className="mr-2" />
              WhatsApp
            </Button>
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100 font-bold text-lg px-8 py-6 hover:scale-105 transition-transform" style={{ fontFamily: 'Rubik, sans-serif' }}>
              <Icon name="Send" size={24} className="mr-2" />
              Telegram
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Index;
