import Button from '../components/ui/Button';
import Input from '../components/ui/Input';
import Card from '../components/ui/Card';
import Alert from '../components/ui/Alert';

export default function UIKit() {
    return (
        <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12 transition-colors duration-300">
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white border-b pb-4">
                UI Kit
            </h1>

            {/* --- BUTTONS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">Buttons</h2>

                {/* Colors */}
                <div className="flex flex-wrap gap-3">
                    <Button variant="primary">Primary</Button>
                    <Button variant="secondary">Secondary</Button>
                    <Button variant="danger">Danger</Button>
                    <Button variant="ghost">Ghost</Button>
                </div>

                {/* Sizes */}
                <div className="flex flex-wrap items-end gap-3">
                    <Button size="sm">Small</Button>
                    <Button size="md">Medium</Button>
                    <Button size="lg">Large</Button>
                </div>
            </section>

            {/* --- INPUTS --- */}
            <section className="space-y-4 max-w-md">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">Inputs</h2>

                <Input id="ui-name" label="Normal Input" placeholder="Bir şey yazın..." />

                <Input
                    id="ui-err"
                    label="Hatalı Input"
                    error="Bu alan zorunludur"
                    defaultValue="Geçersiz veri"
                />

                <Input
                    id="ui-help"
                    label="Help Text"
                    type="email"
                    helpText="E-posta adresinizi girin"
                    placeholder="ornek@mail.com"
                />

                <Input
                    id="ui-dis"
                    label="Disabled"
                    disabled
                    defaultValue="Düzenlenemez"
                />
            </section>

            {/* --- CARDS --- */}
            <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">Cards</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    <Card variant="elevated" title="Elevated Card">
                        Gölge ile yükseltilmiş klasik kart yapısı.
                    </Card>

                    <Card variant="outlined" title="Outlined Card">
                        İnce kenarlıklı, sade tasarım varyantı.
                    </Card>

                    <Card variant="filled" title="Filled Card">
                        Arka planı renkli, kenarlıksız varyant.
                    </Card>
                </div>
            </section>

            {/* --- ALERTS --- */}
            <section className="space-y-4 max-w-xl">
                <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200 border-b pb-2">Alerts</h2>

                <Alert variant="info" title="Bilgi">
                    Formunuz başarıyla kaydedildi.
                </Alert>

                <Alert variant="success" title="Başarılı">
                    İşlem tamamlandı!
                </Alert>

                <Alert variant="warning" title="Uyarı">
                    Oturum 5 dakika sonra sona erecek.
                </Alert>

                <Alert variant="error" title="Hata" dismissible onDismiss={() => alert('Alert kapatıldı')}>
                    Bir bağlantı hatası oluştu. Tekrar deneyin.
                </Alert>
            </section>
        </div>
    );
}
