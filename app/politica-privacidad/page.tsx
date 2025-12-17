export default function PoliticaPrivacidad() {
    return (
        <div className="relative min-h-screen overflow-hidden bg-[#0A0F1E]">
            {/* Grid pattern background */}
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#1a2332_1px,transparent_1px),linear-gradient(to_bottom,#1a2332_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]" />

            {/* Radial gradient overlays */}
            <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[400px] w-[400px] rounded-full bg-blue-500/30 blur-[100px]" />
            <div className="absolute -left-40 top-0 h-[600px] w-[600px] rounded-full bg-purple-500/20 blur-[120px]" />

            <div className="relative z-10">
                <div className="mx-auto max-w-4xl px-4 py-20">
                    <div className="mb-12 text-center">
                        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
                            <span className="bg-gradient-to-r from-white via-gray-200 to-gray-400 bg-clip-text text-transparent">
                                Política de Privacidad
                            </span>
                        </h1>
                    </div>

                    <div className="space-y-8 rounded-xl border border-white/10 bg-white/5 p-8 backdrop-blur-sm md:p-12">
                        <div className="space-y-4 text-gray-200">
                            <p className="text-lg leading-relaxed">
                                En <span className="font-semibold text-white">victorgxn</span> nos tomamos en serio tu privacidad.
                                Esta política explica cómo recopilamos, usamos y protegemos tus datos personales cuando te suscribes a
                                nuestra newsletter, de acuerdo con el Reglamento General de Protección de Datos (RGPD) (UE) 2016/679 y
                                la Ley Orgánica 3/2018 de Protección de Datos Personales y garantía de los derechos digitales
                                (LOPDGDD).
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-white">Datos que recopilamos</h2>
                            <p className="text-gray-200">
                                Cuando te suscribes a la newsletter de victorgxn, te pediremos:
                            </p>
                            <ul className="ml-6 list-disc space-y-1 text-gray-200">
                                <li>Dirección de correo electrónico</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-white">Finalidad del tratamiento</h2>
                            <p className="text-gray-200">Tus datos se usarán únicamente para:</p>
                            <ul className="ml-6 list-disc space-y-2 text-gray-200">
                                <li>
                                    Enviarte la newsletter de victorgxn, que incluye reflexiones, aprendizajes y mensajes sobre
                                    programación y mi camino creando mi startup.
                                </li>
                                <li>
                                    Compartirte información sobre los proyectos en los que victorgxn está involucrado actualmente y
                                    también en los que participe en el futuro.
                                </li>
                                <li>
                                    Hacerte llegar novedades, noticias, contenidos exclusivos, promociones o lanzamientos relacionados
                                    con victorgxn y sus proyectos asociados.
                                </li>
                                <li>Mejorar la comunicación contigo y personalizar el contenido según tus intereses.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-white">Legitimación</h2>
                            <p className="text-gray-200">
                                La base legal para el tratamiento de tus datos es tu consentimiento expreso, que otorgas cuando te
                                suscribes a la newsletter. En cualquier momento puedes retirarlo escribiendo a:{" "}
                                <a href="mailto:victxrgxnzalez@gmail.com" className="text-[#FFFE65] hover:underline">
                                    victxrgxnzalez@gmail.com
                                </a>
                                .
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-white">Conservación de los datos</h2>
                            <ul className="ml-6 list-disc space-y-2 text-gray-200">
                                <li>Mantendremos tus datos mientras sigas suscrito a la newsletter.</li>
                                <li>Si te das de baja, eliminaremos tus datos de nuestros registros de forma segura.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-white">Destinatarios</h2>
                            <p className="text-gray-200">
                                Tus datos no se venden ni se comparten con terceros sin tu permiso. Sí podemos trabajar con proveedores
                                de servicios de email marketing (por ejemplo: ActiveCampaign, MailerLite o similares), que actúan como
                                encargados de tratamiento y cumplen con la normativa RGPD.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-white">Derechos del usuario</h2>
                            <p className="text-gray-200">Como suscriptor, tienes derecho a:</p>
                            <ul className="ml-6 list-disc space-y-2 text-gray-200">
                                <li>Acceder a tus datos personales.</li>
                                <li>Rectificar datos inexactos.</li>
                                <li>Solicitar la supresión de tus datos.</li>
                                <li>Oponerte al tratamiento de tus datos.</li>
                                <li>Solicitar la limitación o portabilidad de tus datos.</li>
                            </ul>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-white">Seguridad</h2>
                            <p className="text-gray-200">
                                En victorgxn adoptamos medidas técnicas y organizativas para proteger tus datos y evitar accesos no
                                autorizados, pérdida o mal uso.
                            </p>
                        </div>

                        <div className="space-y-3">
                            <h2 className="text-2xl font-bold text-white">Modificaciones</h2>
                            <p className="text-gray-200">
                                Nos reservamos el derecho a actualizar esta Política de Privacidad para adaptarla a cambios normativos
                                o mejoras del proyecto. Si los cambios son relevantes, lo notificaremos en la propia newsletter.
                            </p>
                        </div>

                        <div className="mt-8 rounded-lg border border-[#F7DF1F]/30 bg-[#F7DF1F]/10 p-6">
                            <p className="text-lg font-medium text-white">📌 En resumen:</p>
                            <p className="mt-2 text-gray-200">
                                Tus datos son solo para enviarte la newsletter de victorgxn y mantenerte al día sobre los proyectos
                                presentes y futuros en los que victorgxn está involucrado. Nada más.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8 text-center">
                        <a
                            href="/"
                            className="inline-block text-gray-400 underline transition-colors hover:text-white"
                        >
                            Volver al inicio
                        </a>
                    </div>
                </div>

                {/* Footer */}
                <footer className="border-t border-white/10 px-4 py-10">
                    <div className="mx-auto max-w-6xl text-center">
                        <p className="text-sm text-gray-400">© 2025 empiezatusaas.com</p>
                    </div>
                </footer>
            </div>
        </div>
    )
}
