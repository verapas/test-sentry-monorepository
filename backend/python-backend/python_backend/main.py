import sentry_sdk
from sentry_sdk.transport import HttpTransport
import time

# Sentry mit längeren Timeouts
sentry_sdk.init(
    dsn="http://f44b2056ab9145e18aaac4489c965ff4@localhost:9000/2",
    traces_sample_rate=1.0,
    debug=True,
    shutdown_timeout=10,  # ← Mehr Zeit zum Senden
)

print("Sentry initialisiert!")

try:
    division_by_zero = 1 / 0
except Exception as e:
    print(f"Error gefangen: {e}")
    sentry_sdk.capture_exception(e)
    sentry_sdk.flush(timeout=10)  # ← Explizit flushen mit Timeout
    print("Error an Sentry geschickt und geflusht!")

print("Fertig!")
